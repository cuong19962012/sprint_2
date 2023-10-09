package com.example.back_end.repository.user_app;

import com.example.back_end.model.user_app.UserApp;
import org.springframework.data.jpa.repository.JpaRepository;
public interface IUserAppRepository extends JpaRepository<UserApp, Long> {
    UserApp findByUsername(String username);
}
