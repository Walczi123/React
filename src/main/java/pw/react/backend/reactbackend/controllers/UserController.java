package pw.react.backend.reactbackend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pw.react.backend.reactbackend.errors.ErrorResponse;
import pw.react.backend.reactbackend.errors.UserAlreadyExistsException;
import pw.react.backend.reactbackend.errors.UserNotFoundException;
import pw.react.backend.reactbackend.models.User;
import pw.react.backend.reactbackend.services.UserService;

import javax.validation.Valid;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping(path = "/users")
public class UserController {
	private UserService userService;

	@Autowired
	public UserController(UserService userService) {
		this.userService = userService;
	}

	@GetMapping("")
	public ResponseEntity<List<User>> getUsers(@RequestParam(required = false) String login) {
		List<User> result;
		if (login != null && login.length() > 0)
			result = userService.findByLogin(login);
		else
			result = userService.findAll();
			//if(result.isEmpty())result=null;
		if (result == null ) {
			throw new UserNotFoundException("Login: " + login);
		}
		return ResponseEntity.ok(result);
	}

	@GetMapping("/{id}")
	public ResponseEntity<User> getUser(@PathVariable(value = "id") int id) {
		User result = userService.findById(id);
		if (result == null) {
			throw new UserNotFoundException("Id: " + id);
		}
		return ResponseEntity.ok(result);
	}

	@PostMapping("")
	public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
		if (userService.exists(user)) {
			throw new UserAlreadyExistsException("Login: " + user.getLogin());
		}
		User result = userService.save(user);
		return ResponseEntity.ok(result);
	}

	@PutMapping("/{id}")
	public ResponseEntity<User> updateUser(@PathVariable(value = "id") int id, @Valid @RequestBody User user) {
		User userToUpdate = userService.findById(id);
		if (userToUpdate == null) {
			throw new UserNotFoundException("Id: " + id);
		}
		userToUpdate.setAll(user.getLogin(), user.getFirstName(), user.getLastName(), user.getDateOfBirth(),
				user.isActive());
		final User updatedUser = userService.save(userToUpdate);
		return ResponseEntity.ok(updatedUser);
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteUser(@PathVariable(value = "id") int id) {
		User userToDelete = userService.findById(id);
		if (userToDelete == null) {
			throw new UserNotFoundException("Id: " + id);
		}

		userService.delete(userToDelete);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);

		return ResponseEntity.ok(response);
	}

	@ExceptionHandler({UserAlreadyExistsException.class})
	public ResponseEntity<ErrorResponse> alreadyExists(UserAlreadyExistsException ex) {
		return new ResponseEntity<>(
				new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.value(),"The user already exists"),
				HttpStatus.BAD_REQUEST);
	}

	@ExceptionHandler({UserNotFoundException.class})
	public ResponseEntity<ErrorResponse> notFound(UserNotFoundException ex) {
		return new ResponseEntity<>(
				new ErrorResponse(ex.getMessage(), HttpStatus.NOT_FOUND.value(), "The user was not found"),
				HttpStatus.NOT_FOUND);
	}
}