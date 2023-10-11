package com.example.back_end.repository.role;

import com.example.back_end.model.role.UserAppRole;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IUserAppRoleRepository extends JpaRepository<UserAppRole, Long> {
   @Query(value = "select * from user_app_role where user_app_id = :userAppId and flag_deleted = 0",nativeQuery = true)
    List<UserAppRole> getListUserAppRole(@Param("userAppId")Long userAppId);
}
