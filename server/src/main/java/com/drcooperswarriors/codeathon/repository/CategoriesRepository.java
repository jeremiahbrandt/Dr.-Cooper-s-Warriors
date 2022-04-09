package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Categories;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoriesRepository extends JpaRepository<Categories, Long> {
}
