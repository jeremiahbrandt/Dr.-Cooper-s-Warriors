package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.model.User;
import com.drcooperswarriors.codeathon.repository.UserRepository;
import com.drcooperswarriors.codeathon.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/api/user")
    public ResponseEntity getAllExamples(@RequestParam(required = true) Integer id) {
        User user = userRepository.getUserById(id);

        if(user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }

    }
    @GetMapping( "/api/users")
    public List<User> getUsers(){
        return userRepository.findAll();
    }
    
}
