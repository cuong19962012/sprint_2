package com.example.back_end.model;

import javax.persistence.*;

@Entity
public class UserApp {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    private String username;
    private String password;
    @Column(columnDefinition = "TEXT")
    private String image;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "level_id")
    private Level level;
    private Boolean flagDeleted;

    public UserApp() {
    }

    public UserApp(Long id, String username, String password, String image, Level level, Boolean flagDeleted) {
        this.id = id;
        this.username = username;
        this.password = password;
        this.image = image;
        this.level = level;
        this.flagDeleted = flagDeleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Level getLevel() {
        return level;
    }

    public void setLevel(Level level) {
        this.level = level;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
