package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.model.EventParticipants;
import com.drcooperswarriors.codeathon.model.Group;
import com.drcooperswarriors.codeathon.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

public interface EventParticipantsRepository extends JpaRepository<EventParticipants, Integer> {
//
//    @Query("SELECT e FROM EventParticipants e WHERE e.user = :user")
//    public List<Event> getEventsByUsername(@Param("user") User user);

    @Query(value = "SELECT * FROM events WHERE event_id IN (SELECT event_id FROM EventParticipants WHERE user_id = ?1)", nativeQuery = true)
    public List<Event> getEventsByUsername(@Param("user") Integer user_id);

    @Query(value = "SELECT * FROM grops WHERE group_id IN (SELECT event_id FROM EventParticipants WHERE user_id = ?1)", nativeQuery = true)
    public List<Group> getGroupsByUsername(@Param("user") Integer user_id);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM EventParticipants WHERE event_id = :event_id AND user_id = :user_id" , nativeQuery = true)
    public void getEventParticipantsByEventIdAndUserId(@Param("user_id") Integer user_id, @Param("event_id") Integer event_id);

}
