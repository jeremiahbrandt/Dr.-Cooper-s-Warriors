package com.drcooperswarriors.codeathon.model;

import com.drcooperswarriors.codeathon.security.Provider;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name = "users")
public class User {
    @Id
    @OneToOne
    @Column(name = "user_id")
    private int user_id;
    @Column(name = "email")
    private String email;
    @Column(name = "first_name")
    private String first_name;
    @Column(name = "last_name")
    private String last_name;
    @Column(name = "dob")
    private Date dob;
    @Column(name = "image_url")
    private String image_url;
    @Column(name = "registeredAccount_date")
    private Date registeredAccount_date;

    @Enumerated(EnumType.STRING)
    private Provider provider;

    public Provider getProvider() {
        return provider;
    }

    public void setProvider(Provider provider) {
        this.provider = provider;
    }
    public int getUser_id() {
        return user_id;
    }
    public void setUser_id(int user_id) {
        this.user_id = user_id;
    }
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getFirst_name() {
        return first_name;
    }
    public void setFirst_name(String first_name) {
        this.first_name = first_name;
    }
    public String getLast_name() {
        return last_name;
    }
    public void setLast_name(String last_name) {
        this.last_name = last_name;
    }
    public Date getDob() {
        return dob;
    }
    public void setDob(Date dob) {
        this.dob = dob;
    }
    public String getImage_url() {
        return image_url;
    }
    public void setImage_url(String image_url) {
        this.image_url = image_url;
    }
    public Date getRegisteredAccount_date() {
        return registeredAccount_date;
    }
    public void setRegisteredAccount_date(Date registeredAccount_date) {
        this.registeredAccount_date = registeredAccount_date;
    }
}
