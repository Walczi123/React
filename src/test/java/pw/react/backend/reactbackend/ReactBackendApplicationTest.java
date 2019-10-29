package pw.react.backend.reactbackend;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.ActiveProfiles;
import pw.react.backend.reactbackend.controller.UserController;
import pw.react.backend.reactbackend.errors.ErrorResponse;
import pw.react.backend.reactbackend.errors.UserAlreadyExistsException;
import pw.react.backend.reactbackend.errors.UserNotFoundException;
import pw.react.backend.reactbackend.model.User;
import pw.react.backend.reactbackend.repository.UserRepository;
import pw.react.backend.reactbackend.service.UserService;

import java.time.LocalDate;
import java.util.*;
import java.util.stream.Collectors;

import static org.assertj.core.api.BDDAssertions.then;
import static org.mockito.BDDMockito.given;
import static org.mockito.Mockito.when;

@SpringBootTest
@ActiveProfiles("dev")
@RunWith(MockitoJUnitRunner.class)
public class ReactBackendApplicationTest {
    private UserController userController;

    @Spy
    @InjectMocks
    private UserService userService;

    @Mock
    private UserRepository userRepository;

    private static User[] users = {
            new User("login123", "Pawel", "Kowalski", LocalDate.of(2015, 12, 31), true),
            new User("login124", "Gawel", "Nowak", LocalDate.of(2013, 12, 31), false),
            new User("login125", "Tomek", "Mrugala", LocalDate.of(2035, 12, 31), true),
            new User("login126", "Marek", "Zawadka", LocalDate.of(2045, 12, 31), true),
            new User("login127", "Mariusz", "Zyla", LocalDate.of(2017, 12, 31), false)
    };
    @Before
    public void setUp() {
        userController = new UserController(userService);

    }

    @Test
    public void givenuserFromRepository_whenGetuserIsInvoked_thenReturnAlluser() {
        given(userRepository.findAll()).willReturn(Arrays.asList(users));

        // when
        ResponseEntity<List<User>> response = userController.getUsers(null);

        then(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        then(response.getBody()).hasSize(users.length);
        then(response.getBody()).containsExactly(users);
    }

    @Test
    public void givenLogin_whenGetuserWithLoginIsInvoked_thenReturnUserWithProvidedLoign() {
        // given
        String login = users[users.length - 1].getLogin();
        List<User> responseuser = Arrays.stream(users).filter(user -> user.getLogin().equals(login)).collect(Collectors.toList());
        given(userRepository.findByLogin(login)).willReturn(responseuser);

        // when
        ResponseEntity<List<User>> response = userController.getUsers(login);

        then(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        then(response.getBody()).hasSize(1);
        then(response.getBody()).containsExactly(responseuser.get(0));
    }

    @Test(expected = UserNotFoundException.class)
    public void givenInvalidLogin_whenGetuserWithLoginIsInvoked_thenThrowException() {
        // given
        String login = "abba";
        //System.console().printf(userRepository.findByLogin(login))
        given(userRepository.findByLogin(login)).willReturn(null);

        when(userController.getUsers(login)).
                thenThrow(UserNotFoundException.class);
    }

    @Test
    public void givenUserId_whenGetUserByIdIsInvoked_thenReturnUserWithGivenId() {
        // given
        int id = users[users.length - 2].getId();
        User responseUser = Arrays.stream(users).filter(user -> user.getId() == id).findFirst().get();
        given(userRepository.findById(id)).willReturn(responseUser);

        // when
        ResponseEntity<User> response = userController.getUser(id);

        then(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        then(response.getBody()).isEqualToComparingFieldByField(responseUser);
    }

    @Test(expected = UserNotFoundException.class)
    public void givenInvalidUserId_whenGetUserByIdIsInvoked_thenThrowException() {
        // given
        int id = -1;
        given(userRepository.findById(id)).willReturn(null);

        when(userController.getUser(id)).
                thenThrow(UserNotFoundException.class);
    }


    @Test
    public void givenNewUser_whenCreateUserIsInvoked_thenReturnSavedUser() {
        // given
        User user = new User("login", "a", "b", LocalDate.of(2017, 12, 31),false);
        given(userRepository.findByLogin("login")).willReturn(null);
        given(userRepository.save(user)).willReturn(user);

        // when
        ResponseEntity<User> response = userController.createUser(user);

        then(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        then(response.getBody()).isEqualToComparingFieldByField(user);
    }

    @Test(expected = UserAlreadyExistsException.class)
    public void givenNewUserWithExistingLogin_whenCreateUserIsInvoked_thenThrowException() {
        // given
        User user = new User(users[2].getLogin(), "a", "b", LocalDate.of(2017, 12, 31),false);
        given(userRepository.findByLogin(users[2].getLogin())).willReturn(Collections.singletonList(users[2]));

        when(userController.createUser(user)).
                thenThrow(UserAlreadyExistsException.class);
    }

    @Test
    public void givenUpdatedUser_whenUpdateUserIsInvoked_thenReturnUpdatedUser() {
        // given
        User updatedUser = new User("login", users[0].getFirstName(), "b",users[0].getDateOfBirth(), false);
        int id = users[0].getId();
        updatedUser.setId(id);
        given(userRepository.findById(id)).willReturn(users[0]);
        given(userRepository.save(users[0])).willReturn(users[0]);

        // when
        ResponseEntity<User> response = userController.updateUser(id, updatedUser);

        then(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        then(response.getBody()).isEqualToComparingFieldByField(updatedUser);
    }

    @Test
    public void givenUserId_whenDeleteUserIsInvoked_thenReturnValidResponse() {
        // given
        int id = users[1].getId();
        given(userRepository.findById(id)).willReturn(users[1]);

        // when
        ResponseEntity<Map<String, Boolean>> response = userController.deleteUser(id);

        then(response.getStatusCode()).isEqualTo(HttpStatus.OK);
        then(response.getBody()).containsExactly(new AbstractMap.SimpleEntry<>("deleted", Boolean.TRUE));
    }

    @Test
    public void givenUserNotFoundException_whenNotFoundIsInvoked_thenReturnErrorResponse() {
        // given
        UserNotFoundException ex = new UserNotFoundException();

        // when
        ResponseEntity<ErrorResponse> response = userController.notFound(ex);

        then(response.getStatusCode()).isEqualTo(HttpStatus.NOT_FOUND);
        ErrorResponse body = response.getBody();
        then(body.getCode()).isEqualTo(HttpStatus.NOT_FOUND.value());
    }

    @Test
    public void givenUserAlreadyExistsException_whenAlreadyExistsIsInvoked_thenReturnErrorResponse() {
        // given
        UserAlreadyExistsException ex = new UserAlreadyExistsException("msg");

        // when
        ResponseEntity<ErrorResponse> response = userController.alreadyExists(ex);

        then(response.getStatusCode()).isEqualTo(HttpStatus.BAD_REQUEST);
        ErrorResponse body = response.getBody();
        then(body.getMessage()).isEqualTo("msg");
        then(body.getCode()).isEqualTo(HttpStatus.BAD_REQUEST.value());
    }
}