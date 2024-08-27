package com.jobportal.Job.Portal.service;

import com.jobportal.Job.Portal.dto.UserDTO;
import com.jobportal.Job.Portal.entity.User;
import com.jobportal.Job.Portal.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService{
    @Autowired
    private UserRepository userRepo;

    @Override
    public ResponseEntity<UserDTO> registerUser(UserDTO userDTO) {
            User user = userDTO.toEntity();
            user = userRepo.save(user);
            return new ResponseEntity<>(user.toDTO(), HttpStatus.CREATED);

    }
}
