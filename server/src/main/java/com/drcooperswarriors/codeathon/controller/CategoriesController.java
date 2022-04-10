package com.drcooperswarriors.codeathon.controller;

import com.drcooperswarriors.codeathon.model.Categories;
import com.drcooperswarriors.codeathon.repository.CategoriesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CategoriesController {

    @Autowired
    private CategoriesRepository categoriesRepository;


    @GetMapping("/category")
    public List<Categories> getCategories(){
        return categoriesRepository.findAll();
    }

}
