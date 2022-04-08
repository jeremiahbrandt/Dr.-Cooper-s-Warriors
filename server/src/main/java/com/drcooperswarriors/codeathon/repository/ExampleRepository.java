package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.ExampleModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExampleRepository extends JpaRepository<ExampleModel, Long> {
}