package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.model.Group;
import com.drcooperswarriors.codeathon.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

import java.util.List;
import java.util.Optional;

@Controller
@CrossOrigin
public class GroupController {
    @Autowired
    GroupRepository groupRepository;

    @GetMapping("/api/groups")
    public ResponseEntity getAllExamples() {
        List<Group> groups = groupRepository.findAll();
        return ResponseEntity.ok(groups);
    }

    @GetMapping("/api/group")
    public ResponseEntity getAllExamples(@RequestParam(required = true) Integer id) {
        Optional<Group> group = groupRepository.findById(id);

        if(group.isPresent()) {
            return ResponseEntity.ok(group);
        } else {
            return ResponseEntity.notFound().build();
        }

    }
}
