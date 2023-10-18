package com.example.back_end.config.user_app;

import org.springframework.stereotype.Component;

import java.util.HashSet;
import java.util.Set;

@Component
public class InMemoryTokenManager implements TokenManager {

    private Set<String> validTokens = new HashSet<>();

    @Override
    public void addToken(String token) {
        validTokens.add(token);
    }

    @Override
    public void removeToken(String token) {
        validTokens.remove(token);
    }

    @Override
    public boolean isTokenValid(String token) {
        return validTokens.contains(token);
    }
}