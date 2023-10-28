package com.example.back_end.repository.user_app;

import com.example.back_end.model.user_app.UserApp;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

public interface IUserAppRepository extends JpaRepository<UserApp, Long> {
    @Query(value = "select * from user_app where username = :username and flag_deleted = 0", nativeQuery = true)
    Optional<UserApp> findByUsername(@Param("username") String username);

    UserApp findUserAppByUsername(String username);

    @Transactional
    @Modifying
    @Query(value = "UPDATE user_app " +
            "SET rate_id = 2 " +
            "WHERE username = :username", nativeQuery = true)
    void upgradeVipForUserApp(@Param("username") String username);
}
