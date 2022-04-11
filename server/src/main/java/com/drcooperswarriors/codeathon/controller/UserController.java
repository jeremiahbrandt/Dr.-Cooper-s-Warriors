package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.model.*;
import com.drcooperswarriors.codeathon.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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

    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private EventRepo eventRepo;



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
        eventParticipantsRepository.getEventParticipantsByEventIdAndUserId(1, 7);
        return ResponseEntity.ok("Delete");
    }

    @GetMapping("/api/getUserInformation")
    public ResponseEntity getUserInfo(@RequestParam(required = true) Integer id){
        User user = userRepository.getUserById(id);



        if(user != null) {

            List<Event> events = eventRepo.getEventsByUsername(user.getUser_id());
            List<Group> groups = eventRepo.getGroupsByUsername(user.getUser_id());
            //List<Event> events = eventParticipantsRepository.getEventsByUsername(user.getUser_id());
            //List<Group> groups = eventParticipantsRepository.getGroupsByUsername(user.getUser_id());
            UserResponse ur = new UserResponse(user, events, groups );
            return ResponseEntity.ok(ur);
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
