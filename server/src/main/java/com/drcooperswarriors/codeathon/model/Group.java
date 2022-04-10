package com.drcooperswarriors.codeathon.model;

import javax.persistence.*;

@Entity
@Table(name = "grops")
public class Group {
    @Id
    @Column(name = "group_id")
    private int group_id;
    @Column(name = "group_owner")
    private int group_owner;
    @Column(name = "group_name")
    private String group_name;
    @Column(name = "group_description")
    private String group_description;

    public Categories getCategory() {
        return category;
    }

    public void setCategory(Categories categories) {
        this.category = categories;
    }

    @OneToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cat_id", referencedColumnName = "cat_id")
    private Categories category;

    public int getGroup_id() {
        return group_id;
    }

    public void setGroup_id(int group_id) {
        this.group_id = group_id;
    }

    public int getGroup_owner() {
        return group_owner;
    }

    public void setGroup_owner(int group_owner) {
        this.group_owner = group_owner;
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
