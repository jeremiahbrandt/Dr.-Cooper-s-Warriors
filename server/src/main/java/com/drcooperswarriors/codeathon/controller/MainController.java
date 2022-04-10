package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
@CrossOrigin
public class MainController {
    @Autowired
    JwtUtils jwtUtils;

    @CrossOrigin
    @GetMapping("/api/test")
    public ResponseEntity getAllExamples() {
        return ResponseEntity.ok("Hello World");
    }




}