package io.github.ayatotk.user_management_backend.Application.Services;

import io.github.ayatotk.user_management_backend.Application.DTO.UserDTO;
import io.github.ayatotk.user_management_backend.Application.Mappings.UserMapper;
import io.github.ayatotk.user_management_backend.Infra.Repositories.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class UserService {

    UserRepository userRepository;

    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserDTO createUser(UserDTO userDTO) {
        userRepository.save(UserMapper.INSTANCE.userDTOToUser(userDTO));
        return userDTO;
    }

    public UserDTO updateUser(UserDTO userDTO, long id) {
        var user = UserMapper.INSTANCE.userDTOToUser(userDTO);
        user.setId(id);
        userRepository.save(user);
        return userDTO;
    }

    public List<UserDTO> getAllUsers() {
        var users = userRepository.findAll();
        return users.stream().map(UserMapper.INSTANCE::userToUserDTO).collect(Collectors.toList());
    }

    public UserDTO getUserById(long id) {
        var user = userRepository.findById(id).orElse(null);
        return UserMapper.INSTANCE.userToUserDTO(user);
    }


}
