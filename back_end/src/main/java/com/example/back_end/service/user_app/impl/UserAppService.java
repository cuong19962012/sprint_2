package com.example.back_end.service.user_app.impl;

import com.example.back_end.model.user_app.UserApp;
import com.example.back_end.model.user_app.UserAppDto;
import com.example.back_end.repository.user_app.IUserAppRepository;
import com.example.back_end.service.user_app.IUserAppService;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;


@Service
public class UserAppService implements IUserAppService {
    @Autowired
    private IUserAppRepository userAppRepository;
    @Autowired
    private PasswordEncoder bcryptEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        UserApp userApp = userAppRepository.findByUsername(username);
        if (userApp == null)
            throw new UsernameNotFoundException("User not found with username: " + username);
        return new User(userApp.getUsername(), userApp.getPassword(),
                new ArrayList<>());
    }

    public UserApp save(UserAppDto userAppDto) {
        UserApp userApp = new UserApp();
        userApp.setUsername(userAppDto.getUsername());
        userApp.setPassword(bcryptEncoder.encode(userAppDto.getPassword()));
        return userAppRepository.save(userApp);
    }
}
