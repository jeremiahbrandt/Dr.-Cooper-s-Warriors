package com.drcooperswarriors.codeathon.model;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;
import java.util.List;


public class UserResponse {

    private User user;
    private List<Event> events;
    private List<Group> groups;

    public UserResponse(User user, List<Event> events, List<Group> groups) {
        this.user = user;
        this.events = events;
        this.groups = groups;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public List<Event> getEvents() {
        return events;
    }

    public void setEvents(List<Event> events) {
        this.events = events;
    }

    public List<Group> getGroups() {
        return groups;
    }

    public void setGroups(List<Group> groups) {
        this.groups = groups;
    }
}
