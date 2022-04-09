package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
