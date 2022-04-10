package com.drcooperswarriors.codeathon.repository;

import com.drcooperswarriors.codeathon.model.Event;
import com.drcooperswarriors.codeathon.model.Group;
import com.drcooperswarriors.codeathon.model.Member;
import com.drcooperswarriors.codeathon.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;


public interface MemberRepository extends JpaRepository<Member, Integer> {

    @Query("SELECT e FROM Member e WHERE e.user = :user")
    public List<Group> getGroupsByUsername(@Param("user") User user);

}
