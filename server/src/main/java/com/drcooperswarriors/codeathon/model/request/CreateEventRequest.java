package com.drcooperswarriors.codeathon.model.request;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.model.Group;
import com.drcooperswarriors.codeathon.repository.CategoriesRepository;
import com.drcooperswarriors.codeathon.repository.GroupRepository;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.Date;

public class CreateEventRequest {
    public void setGroupRepository(GroupRepository groupRepository) {
        this.groupRepository = groupRepository;
    }

    private GroupRepository groupRepository;

    private double lat;
    private double log;
    private String address;
    private String name;
    private String imageURL;
    private int groupId;
    private Date date;

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

        Group group = groupRepository.getById(this.groupId);
        event.setGroup(group);

        return event;
    }
}
