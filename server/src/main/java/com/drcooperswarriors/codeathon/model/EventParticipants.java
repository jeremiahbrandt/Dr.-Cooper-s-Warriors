package com.drcooperswarriors.codeathon.model;

import javax.persistence.*;
@Entity
@Table(name = "eventParticipants")
public class EventParticipants {
    @Id

    @Column(name = "event_id")
    private int event_id;

    @Column(name = "user_id")
    private int user_id;
    public int getEvent_id(){
        return event_id;
    }
    public void setEvent_id(int event_id) {
        this.event_id = event_id;
    }
    public int getUser_id(){
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
}
