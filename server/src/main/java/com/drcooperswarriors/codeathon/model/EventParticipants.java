package com.drcooperswarriors.codeathon.model;

import javax.persistence.*;
@Entity
@Table(name = "eventParticipants")
public class EventParticipants {

    @Id
    @Column(name = "event_participant_id")
    private Long event_participant_id;

    @ManyToOne
    @JoinColumn(name="event_id", nullable = false)
    private Event event;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;

    public Long getEvent_participant_id() {
        return event_participant_id;
    }

    public void setEvent_participant_id(Long event_participant_id) {
        this.event_participant_id = event_participant_id;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
