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
 }
