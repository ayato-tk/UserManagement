package io.github.ayatotk.user_management_backend.Web.Controllers;

import io.github.ayatotk.user_management_backend.Application.DTO.UserDTO;
import io.github.ayatotk.user_management_backend.Application.Services.UserService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("user")
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping()
    public List<UserDTO> getAllUsers() {
        return this.userService.getAllUsers();
    }

    @GetMapping("{id}")
    public UserDTO getUser(@PathVariable("id") long id) {
        return this.userService.getUserById(id);
    }

    @PostMapping()
    public UserDTO createUser(@RequestBody UserDTO userDTO) {
        return this.userService.createUser(userDTO);
    }

    @PutMapping("{id}")
    public UserDTO updateUser(@PathVariable("id") long id, @RequestBody UserDTO userDTO) {
        return this.userService.updateUser(userDTO, id);
    }
}
