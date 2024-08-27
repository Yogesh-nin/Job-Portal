package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.UserDTO;
import org.springframework.http.ResponseEntity;

public interface UserService {
    public ResponseEntity<UserDTO> registerUser(UserDTO userDTO);
}
