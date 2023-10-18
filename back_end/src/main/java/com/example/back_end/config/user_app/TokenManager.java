package com.example.back_end.config.user_app;

public interface TokenManager {
    void addToken(String token);

    void removeToken(String token);

    boolean isTokenValid(String token);
}
