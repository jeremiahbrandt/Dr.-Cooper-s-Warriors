package com.drcooperswarriors.codeathon.controller;

import java.util.*;
import java.util.stream.Collectors;

import javax.validation.Valid;

import com.drcooperswarriors.codeathon.payload.request.LoginRequest;
import com.drcooperswarriors.codeathon.payload.response.JwtResponse;
import com.drcooperswarriors.codeathon.security.CustomOAuth2User;
import com.drcooperswarriors.codeathon.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drcooperswarriors.codeathon.model.ExampleModel;
import com.drcooperswarriors.codeathon.repository.ExampleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("api/")
public class ExampleController {
    @Autowired
    private ExampleRepository repository;

    @Autowired
    JwtUtils jwtUtils;

    @GetMapping("user")
    public String helloUser() {
        return "Hello User";
    }

    @GetMapping("examples")
    public ResponseEntity<JwtResponse> getAllExamples(){
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String jwt = jwtUtils.generateJwtToken(authentication);

        CustomOAuth2User oauthUser = (CustomOAuth2User) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt,
                new Long(1),
                oauthUser.getEmail(),
                oauthUser.getName(),
                new ArrayList<>()));
//        return this.repository.findAll();
    }
}
