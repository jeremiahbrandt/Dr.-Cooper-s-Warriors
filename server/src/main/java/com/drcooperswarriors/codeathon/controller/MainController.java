package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.payload.response.JwtResponse;
import com.drcooperswarriors.codeathon.security.CustomOAuth2User;
import com.drcooperswarriors.codeathon.security.JwtUtils;
import org.apache.coyote.Request;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;

import java.util.ArrayList;

@Controller
@CrossOrigin
public class MainController {
    @RequestMapping(value = "/app")
    public String index() {
        return "index";
    }

    @Autowired
    JwtUtils jwtUtils;

    @CrossOrigin
    @GetMapping("/api/test")
    public ResponseEntity getAllExamples() {

//        return ResponseEntity.ok(
//                "Hello World"
//        );

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