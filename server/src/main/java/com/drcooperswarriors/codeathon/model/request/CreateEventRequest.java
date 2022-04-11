package com.drcooperswarriors.codeathon.model.request;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.model.Group;
import com.drcooperswarriors.codeathon.model.User;
import com.drcooperswarriors.codeathon.repository.CategoriesRepository;
import com.drcooperswarriors.codeathon.repository.GroupRepository;
import com.drcooperswarriors.codeathon.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.Entity;
import java.util.Date;

public class CreateEventRequest {
    public void setGroupRepository(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }

    private GroupRepository groupRepository;

    public void setUserRepository(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private UserRepository userRepository;

    private double lat;
    private double log;
    private String address;
    private String name;
    private String imageURL;
    private int groupId;
    private Date date;
    private int userId;

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public int getEventId() {
        return eventId;
    }

    public void setEventId(int eventId) {
        this.eventId = eventId;
    }

    private int eventId;

    public void setLat(double lat) {
        this.lat = lat;
    }

    public void setLog(double log) {
        this.log = log;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setImageURL(String imageURL) {
        this.imageURL = imageURL;
    }

    public void setGroupId(int groupId) {
        this.groupId = groupId;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Event getEvent() {
        Event event = new Event();

        event.setLat(this.lat);
        event.setLog(this.log);
        event.setAddress(this.address);
        event.setName(this.name);
        event.setImageURL(this.imageURL);
        event.setDate(this.date);
        event.setEvent_id(this.eventId);

        User user = userRepository.findById(this.userId).get();
        event.setUser(user);

        Group group = groupRepository.findById(this.groupId).get();
        event.setGroup(group);

        return event;
    }
}
