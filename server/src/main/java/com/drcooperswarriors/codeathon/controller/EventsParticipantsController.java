package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.model.User;
import com.drcooperswarriors.codeathon.repository.EventParticipantsRepository;
import com.drcooperswarriors.codeathon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class EventsParticipantsController {

    @Autowired
    private EventParticipantsRepository eventParticipantsRepository;


    @Autowired
    private UserRepository userRepository;




}
