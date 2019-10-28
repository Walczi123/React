package controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import model.User;
import service.UserService;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/spring-demo")
public class UserController {
	private UserService UserService;

	@Autowired
	public UserController(UserService UserService) {
		this.UserService = UserService;
	}

	@GetMapping("/user")
	public ResponseEntity<List<User>> getUser(@RequestParam(required = false) String login) {
		List<User> result;
		if (login != null && login.length() > 0)
			result = UserService.findByLogin(login);
		else
			result = UserService.findAll();
		if (result == null) {
			throw new RuntimeException("user");
		}

		return ResponseEntity.ok(result);
	}

	@GetMapping("/user/{id}")
	public ResponseEntity<User> getUser(@PathVariable(value = "id") int id) {
		User result = UserService.findById(id);
		if (result == null) {
			throw new RuntimeException("id");
		}

		return ResponseEntity.ok(result);
	}

	@PostMapping("/user/")
	public ResponseEntity<User> createUser(@Valid @RequestBody User user) {
		if (UserService.exists(user)) {
			throw new RuntimeException("login");
		}

		User result = UserService.save(user);

		return ResponseEntity.ok(result);
	}
}