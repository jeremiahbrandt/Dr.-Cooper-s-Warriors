package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public class EventRepo{


    /*
    @Query(value = "SELECT * FROM events WHERE event_id IN (SELECT event_id FROM EventParticipants WHERE user_id = ?)", nativeQuery = true)
    public List<Event> getEventsByUsername(@Param("user") Integer user_id);

    @Query(value = "SELECT * FROM grops WHERE group_id IN (SELECT event_id FROM EventParticipants WHERE user_id = ?)", nativeQuery = true)
    public List<Group> getGroupsByUsername(@Param("user") Integer user_id);
    */

    @PersistenceContext
    private EntityManager em;

    public List<Event> getEventsByUsername(Integer user_id){

        System.out.println("getEventsByUsername user_id : " + user_id);
        String queryStr = "SELECT * FROM events WHERE event_id IN (SELECT event_id FROM EventParticipants WHERE user_id = :user_id)";

        List<Event> events =  em.createNativeQuery(queryStr, Event.class)
                .setParameter("user_id",user_id)
                .getResultList();

        return events;
    }


    public List<Group> getGroupsByUsername(Integer user_id){

        System.out.println("getEventsByUsername user_id : " + user_id);
        String queryStr = "SELECT * FROM grops WHERE group_id IN (SELECT event_id FROM EventParticipants WHERE user_id = :user_id)";

        List<Group> groups =  em.createNativeQuery(queryStr, Group.class)
                .setParameter("user_id",user_id)
                .getResultList();

        return groups;
    }


}