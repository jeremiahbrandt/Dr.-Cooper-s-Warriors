package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Group;
import org.springframework.data.jpa.repository.JpaRepository;

public interface GroupRepository extends JpaRepository<Group, Integer> {
}
