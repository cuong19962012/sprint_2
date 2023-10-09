package com.example.back_end.model.album;

import com.example.back_end.model.user_app.UserApp;

import javax.persistence.*;

@Entity
public class Album {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "user_app_id")
    private UserApp userApp;
    private Boolean flagDeleted;

    public Album() {
    }

    public Album(Long id, String name, UserApp userApp, Boolean flagDeleted) {
        this.id = id;
        this.name = name;
        this.userApp = userApp;
        this.flagDeleted = flagDeleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public UserApp getUser() {
        return userApp;
    }

    public void setUser(UserApp userApp) {
        this.userApp = userApp;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
