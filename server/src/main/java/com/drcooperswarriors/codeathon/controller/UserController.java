package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.model.*;
import com.drcooperswarriors.codeathon.repository.*;
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

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private EventParticipantsRepository eventParticipantsRepository;

    @Autowired
    private MemberRepository memberRepository;


    @GetMapping("/api/user")
    public ResponseEntity getAllExamples(@RequestParam(required = true) Integer id) {
        User user = userRepository.getUserById(id);

        if(user != null) {
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }

    }

    @PostMapping("/api/user")
    User newUser(@RequestBody User user) {

        return userRepository.save(user);
    }

    @DeleteMapping("/api/user/event")
    public ResponseEntity cancelRes(@RequestParam(required = true) Integer id) {
        eventParticipantsRepository.deleteById(id);
        return ResponseEntity.ok("Delete");
    }

    @GetMapping("/api/getUserInformation")
    public ResponseEntity getUserInfo(@RequestParam(required = true) Integer id){
        User user = userRepository.getUserById(id);

        if(user != null) {
            List<Event> events = eventParticipantsRepository.getEventsByUsername(user);
            List<Group> groups = eventParticipantsRepository.getGroupsByUsername(user);
            UserResponse ur = new UserResponse(user, events, groups );
            return ResponseEntity.ok(user);
        } else {
            return ResponseEntity.notFound().build();
        }

    }


    // @GetMapping( "/api/users")
    // public List<User> getUsers(){
    //     return userRepository.findAll();
    // }
//    @GetMapping("/getUserEvents")
//    public ResponseEntity<List<Event>>getAllEvents(@RequestParam(required = true) Integer id){
//        Optional<User> user = userRepository.findById(id);
//        if(user.isPresent()) {
//            return ResponseEntity.ok(user.get());
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//        return eventParticipantsRepository.getEventsByUsername(user);
//    }
}
