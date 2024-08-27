package com.jobportal.Job.Portal.api;

import com.jobportal.Job.Portal.dto.UserDTO;
import com.jobportal.Job.Portal.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("users")
public class UserApi {
    @Autowired
    private UserService userService;
    @PostMapping("register")
    public ResponseEntity<UserDTO> registerUser(@RequestBody UserDTO userDTO){
        return userService.registerUser(userDTO);
    }
}
