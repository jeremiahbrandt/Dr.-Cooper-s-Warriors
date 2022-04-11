package com.drcooperswarriors.codeathon.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "eventparticipants")
public class EventParticipants {
//    @Autowired
//    private EventRepository eventRepository;
//
//    @Autowired
//    private UserRepository userRepository;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "event_participant_id")
    private Integer event_participant_id;

    @ManyToOne(fetch =  FetchType.LAZY)
    @JoinColumn(name="event_id", nullable = false)
    private Event event;

    @ManyToOne(fetch =  FetchType.LAZY)
    @JoinColumn(name="user_id", nullable = false)
    private User user;




    public Integer getEvent_participant_id() {
        return event_participant_id;
    }

    public void setEvent_participant_id(Integer event_participant_id) {
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
