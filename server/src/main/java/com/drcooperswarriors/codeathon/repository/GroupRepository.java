package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Group;
import com.drcooperswarriors.codeathon.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import javax.validation.constraints.Digits;
import java.util.List;

public interface GroupRepository extends JpaRepository<Group, Integer> {

    @Query(value = "SELECT * FROM grops WHERE grops.user_id = :id", nativeQuery = true)
    public List<User> getGroupsByUserId(@Param("id") Integer id);

}

