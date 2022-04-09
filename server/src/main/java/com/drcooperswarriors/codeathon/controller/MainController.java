package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.payload.response.JwtResponse;
import com.drcooperswarriors.codeathon.security.CustomOAuth2User;
import com.drcooperswarriors.codeathon.security.JwtUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

@Controller
public class MainController {
    @RequestMapping(value = "/app")
    public String index() {
        return "index";
    }

    @Autowired
    JwtUtils jwtUtils;

    @GetMapping("/test")
    public ResponseEntity<JwtResponse> getAllExamples() {
        Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        String jwt = jwtUtils.generateJwtToken(authentication);

        CustomOAuth2User oauthUser = (CustomOAuth2User) authentication.getPrincipal();

        return ResponseEntity.ok(new JwtResponse(jwt,
                new Long(1),
                oauthUser.getEmail(),
                oauthUser.getName(),
                new ArrayList<>()));
    }


}