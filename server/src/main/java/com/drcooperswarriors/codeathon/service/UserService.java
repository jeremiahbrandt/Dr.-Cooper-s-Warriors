package com.drcooperswarriors.codeathon.service;

import com.drcooperswarriors.codeathon.model.User;
import com.drcooperswarriors.codeathon.repository.UserRepository;
import com.drcooperswarriors.codeathon.security.Provider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {
    @Autowired
    private UserRepository repo;

    public void processOAuthPostLogin(String username) {
        User existUser = repo.getUserByUsername(username);
        if (existUser == null) {
            User newUser = new User();
            newUser.setUsername(username);
            newUser.setProvider(Provider.GOOGLE);
            newUser.setEnabled(true);
            newUser.setRole("Tester");

            repo.save(newUser);
        }
    }

}