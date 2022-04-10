package com.drcooperswarriors.codeathon.model;

import com.drcooperswarriors.codeathon.security.Provider;

import javax.persistence.*;

@Entity
@Table(name = "events")
public class Event {

    @Id
    @Column(name = "event_id")
    private int event_id;

    @Column(name = "lat")
    private double lat;

    @Column(name = "log")
    private double log;

    @Column(name = "address")
    private String address;

    @Column(name = "name", nullable = false)
    private String name;

    @Column(name = "imageURL")
    private String imageURL;

    @ManyToOne
    @JoinColumn(name="group_id", nullable = false)
    private Group group;


    public int getEvent_id() {
        return event_id;
    }

    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }

    public double getLat() {
        return lat;
    }

    public void setLat(double lat) {
        this.lat = lat;
    }

    public double getLog() {
        return log;
    }

    public void setLog(double log) {
        this.log = log;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }
}
