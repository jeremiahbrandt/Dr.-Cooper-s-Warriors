package com.drcooperswarriors.codeathon.model;
import javax.persistence.*;
@Entity
@Table(name = "eventParticipants")
public class Categories {
    @Id
    @ManyToMany
    @Column(name = "id")
    private int id;
    @Column(name = "name")
    private String name;

    public int getId() {
        return id;
    }
    public void setName(String name) {
        this.name = name;
    }
    public String getName() {
        return name;
    }
    public void setId(int id) {
        this.id = id;
    }
}
