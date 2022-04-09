package com.drcooperswarriors.codeathon.model;

import javax.persistence.*;
@Entity
@Table(name = "members")
public class Member {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long member_id;

    @ManyToOne
    @JoinColumn(name="user_id", nullable = false)
    private User user;


    @ManyToOne
    @JoinColumn(name="group_id", nullable = false)
    private Group group;





}
