package com.drcooperswarriors.codeathon.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import java.lang.reflect.Member;

public interface MemberRepository extends JpaRepository<Member,Long> {
}
