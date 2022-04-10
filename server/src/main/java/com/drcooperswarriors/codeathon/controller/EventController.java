package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.model.EventParticipants;
import com.drcooperswarriors.codeathon.model.User;
import com.drcooperswarriors.codeathon.model.request.CreateEventRequest;
import com.drcooperswarriors.codeathon.repository.EventParticipantsRepository;
import com.drcooperswarriors.codeathon.repository.EventRepository;
import com.drcooperswarriors.codeathon.repository.GroupRepository;
import com.drcooperswarriors.codeathon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EventController {
    @Autowired
    private EventRepository eventRepository;

    @Autowired
    private EventParticipantsRepository eventParticipantsRepository;

    @Autowired
    private GroupRepository groupRepository;

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/event")
    public List<Event> getEvents() { return eventRepository.findAll(); }

    @PostMapping("/events")
    Event newEvent(@RequestBody CreateEventRequest request) {
        request.setGroupRepository(groupRepository);
        return eventRepository.save(request.getEvent());
    }

    @PostMapping("/register")
    @CrossOrigin
    @ResponseBody
    public ResponseEntity<Object> registerForEvent(@RequestParam(required = true) int eventId){
        // TODO extract userId from token in Authorization header
        int userId = 1;
        EventParticipants eventParticipants = new EventParticipants();
        Optional<Event> event = eventRepository.findById(eventId);
        eventParticipants.setEvent(event.get());
        Optional<User> user = userRepository.findById(userId);
        eventParticipants.setUser((user.get()));
        eventParticipantsRepository.save(eventParticipants);
        return new ResponseEntity<>(HttpStatus.CREATED);
    }
    @GetMapping("/getEventsByUser")
    public List<User> getEventsByUser(@RequestParam(required = true) Integer id){
        return eventRepository.getEventsByUsername(id);

    }

//    @GetMapping("/api/user")
//    public ResponseEntity getAllExamples(@RequestParam(required = true) Integer id) {
//        User user = userRepository.getUserById(id);
//
//        if(user != null) {
//            return ResponseEntity.ok(user);
//        } else {
//            return ResponseEntity.notFound().build();
//        }
//
//    }
}
