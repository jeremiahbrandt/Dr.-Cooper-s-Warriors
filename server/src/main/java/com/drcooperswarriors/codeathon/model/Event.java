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

    public String getImageURL() { return imageURL; }
    public void setImageURL(String imageURL) { this.imageURL = imageURL; }


}
