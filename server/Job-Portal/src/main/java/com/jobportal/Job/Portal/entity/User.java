package com.jobportal.Job.Portal.entity;

import com.jobportal.Job.Portal.dto.AccountType;
import com.jobportal.Job.Portal.dto.UserDTO;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;

    @Column(unique=true )
    private String email;
    private String password;
    private AccountType accountType;

    public UserDTO toDTO(){
        return new UserDTO(this.id, this.name, this.email, this.password, this.accountType);
    }

}
