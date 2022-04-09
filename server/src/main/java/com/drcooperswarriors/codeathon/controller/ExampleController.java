package com.drcooperswarriors.codeathon.controller;

import java.util.*;

import com.drcooperswarriors.codeathon.payload.response.JwtResponse;
import com.drcooperswarriors.codeathon.security.CustomOAuth2User;
import com.drcooperswarriors.codeathon.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import org.springframework.web.bind.annotation.*;

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
