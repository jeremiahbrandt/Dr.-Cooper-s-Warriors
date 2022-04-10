package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.repository.EventRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api")
public class EventController {

    @Autowired
    private EventRepository eventRepository;

    @GetMapping("/event")
    public List<Event> getEvents() { return eventRepository.findAll(); }

    @PostMapping("/events")
    Event newEvent(@RequestBody Event event) {
        return eventRepository.save(event);
    }
}
