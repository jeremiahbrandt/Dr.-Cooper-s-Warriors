package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface EventRepository extends JpaRepository<Event, Integer> {



}
