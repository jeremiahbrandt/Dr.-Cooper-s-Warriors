package com.drcooperswarriors.codeathon.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.List;

@Service
@Transactional
public class ExampleService {

    @Autowired
    private ExampleRepository repo;

    public List<ExampleModel> listAll() {
        return repo.findAll();
    }

    public void save(ExampleModel product) {
        repo.save(product);
    }

    public ExampleModel get(long id) {
        return repo.findById(id).get();
    }

    public void delete(long id) {
        repo.deleteById(id);
    }
}