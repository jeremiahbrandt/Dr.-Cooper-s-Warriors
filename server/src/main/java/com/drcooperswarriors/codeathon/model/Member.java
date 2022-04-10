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


    public Long getMember_id() {
        return member_id;
    }

    public void setMember_id(Long member_id) {
        this.member_id = member_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public Group getGroup() {
        return group;
    }

    public void setGroup(Group group) {
        this.group = group;
    }
}
