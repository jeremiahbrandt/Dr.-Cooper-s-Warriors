package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.EventParticipants;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventParticipantsRepository extends JpaRepository<EventParticipants, Long> {

}
