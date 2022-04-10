package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.model.EventParticipants;
import com.drcooperswarriors.codeathon.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface EventParticipantsRepository extends JpaRepository<EventParticipants, Integer> {

    @Query("SELECT e FROM EventParticipants e WHERE e.user = :user")
    public List<Event> getEventsByUsername(@Param("user") Optional<User> user);



}
