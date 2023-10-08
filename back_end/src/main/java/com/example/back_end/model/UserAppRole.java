package com.example.back_end.model;

import javax.persistence.*;

@Entity
public class UserAppRole {
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Id
    private Long id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "user_app_id")
    private UserApp userApp;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "role_id")
    private Role role;
    private Boolean flagDeleted;

    public UserAppRole() {
    }

    public UserAppRole(Long id, UserApp userApp, Role role, Boolean flagDeleted) {
        this.id = id;
        this.userApp = userApp;
        this.role = role;
        this.flagDeleted = flagDeleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public UserApp getUser() {
        return userApp;
    }

    public void setUser(UserApp userApp) {
        this.userApp = userApp;
    }

    public Role getRole() {
        return role;
    }

    public void setRole(Role role) {
        this.role = role;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
