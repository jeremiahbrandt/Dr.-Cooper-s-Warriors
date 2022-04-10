package com.drcooperswarriors.codeathon.model;

import javax.persistence.*;

@Entity
@Table(name = "grops")
public class Group {
    @Id
    @Column(name = "group_id")
    private int group_id;

    @ManyToOne
    @JoinColumn(name = "user_id",nullable = false)
    private User user;


    @Column(name = "group_name")
    private String group_name;
    @Column(name = "group_description")
    private String group_description;

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cat_id", referencedColumnName = "cat_id")
    private Categories category;


    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories categories) {
        this.category = categories;
    }



    public int getGroup_id() {
        return group_id;
    }

    public void setGroup_id(int group_id) {
        this.group_id = group_id;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }

    public String getGroup_name() {
        return group_name;
    }

    public void setGroup_name(String group_name) {
        this.group_name = group_name;
    }

    public String getGroup_description() {
        return group_description;
    }

    public void setGroup_description(String group_description) {
        this.group_description = group_description;
    }
}
