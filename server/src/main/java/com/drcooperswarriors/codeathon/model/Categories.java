package com.drcooperswarriors.codeathon.model;
import javax.persistence.*;
@Entity
@Table(name = "categories")
public class Categories {
    @Id
    @Column(name = "cat_id")
    private int cat_id;

    @Column(name = "name")
    private String name;

    @OneToOne(mappedBy = "categories")
    private Event event;

    public int getCat_id() {
        return cat_id;
    }

    public void setCat_id(int cat_id) {
        this.cat_id = cat_id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Event getEvent() {
        return event;
    }

    public void setEvent(Event event) {
        this.event = event;
    }
}
