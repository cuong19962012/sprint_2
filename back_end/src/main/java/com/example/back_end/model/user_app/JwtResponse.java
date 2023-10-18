package com.example.back_end.model.user_app;

import org.springframework.security.core.userdetails.UserDetails;

import java.io.Serializable;


public class JwtResponse implements Serializable {

    private static final long serialVersionUID = -8091879091924046844L;
    private final String jwttoken;
    private UserApp userApp;

    public JwtResponse(String jwttoken, UserApp userApp) {
        this.jwttoken = jwttoken;
        this.userApp = userApp;
    }

    public String getToken() {
        return this.jwttoken;
    }

    public UserApp getUserApp() {
        return userApp;
    }
}