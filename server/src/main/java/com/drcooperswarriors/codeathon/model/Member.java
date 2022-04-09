package com.drcooperswarriors.codeathon.model;

import javax.persistence.*;
@Entity
@Table(name = "members")
public class Member {
    @Id
    @Column(name = "member_id")
    private int member_id;
    @Column(name = "group_id")
    private int group_id;

    public int getMember_id() {
        return member_id;
    }
    public void setMember_id(int member_id) {
        this.member_id = member_id;
    }
    public int getGroup_id(){
        return group_id;
    }
    public void setGroup_id(int group_id){
        this.group_id = group_id;
    }
}
