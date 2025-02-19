package io.github.ayatotk.user_management_backend.Application.DTO;

import lombok.Data;

@Data
public class UserDTO {

    public UserDTO(long id, String name, String email) {
        this.id = id;
        this.name = name;
        this.email = email;
    }

    private long id;

    private String name;

    private String email;

}
