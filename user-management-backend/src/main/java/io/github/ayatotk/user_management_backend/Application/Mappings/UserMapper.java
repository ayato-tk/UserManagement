package io.github.ayatotk.user_management_backend.Application.Mappings;

import io.github.ayatotk.user_management_backend.Application.DTO.UserDTO;
import io.github.ayatotk.user_management_backend.Domain.User;
import org.mapstruct.Mapper;
import org.mapstruct.factory.Mappers;

@Mapper(componentModel = "spring")
public interface UserMapper {
    UserMapper INSTANCE = Mappers.getMapper(UserMapper.class);

    UserDTO userToUserDTO(User user);
    
    User userDTOToUser(UserDTO userDTO);
}
