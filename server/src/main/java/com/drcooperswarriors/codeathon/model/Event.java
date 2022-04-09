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

    @OneToMany
    @JoinColumn(name = "group_id")
    private Group group_id;

    @OneToOne
    @JoinColumn(name = "cat_id.categories")
    private Categories id;


    //getters and setters
    public double getevent_id() {
        return lat;
    }
    public void setevent_id(int event_id) {
        this.event_id = event_id;
    }

    public double getlat() {
        return lat;
    }
    public void setlat(double lat) {
        this.lat = lat;
    }

    public double getlog() {
        return log;
    }
    public void setlog(double log) {
        this.log = log;
    }

    public String getaddress() {
        return address;
    }
    public void setaddress(String address) {
        this.address = address;
    }

    public int getgroup_id() {
        return group_id;
    }
    public void setgroup_id(int group_id) {
        this.group_id = group_id;
    }

    public double getcat_id() {
        return cat_id;
    }
    public void setcat_id(int cat_id) {
        this.cat_id = cat_id;
    }

}
