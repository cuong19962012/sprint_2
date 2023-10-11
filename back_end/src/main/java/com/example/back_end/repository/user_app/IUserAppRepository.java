package com.example.back_end.repository.user_app;

import com.example.back_end.model.user_app.UserApp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

public interface IUserAppRepository extends JpaRepository<UserApp, Long> {
    @Query(value = "select * from user_app where username = :username and flag_deleted = 0",nativeQuery = true)
    UserApp findByUsername(@Param("username") String username);
}
