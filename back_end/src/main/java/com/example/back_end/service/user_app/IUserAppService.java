package com.example.back_end.service.user_app;
import com.example.back_end.model.user_app.UserApp;
import com.example.back_end.model.user_app.UserAppDto;
import org.springframework.security.core.userdetails.UserDetailsService;
public interface IUserAppService extends UserDetailsService{
    UserApp save(UserAppDto userAppDto);
    UserApp findUserAppByUsername(String username);
    void upgradeVipForUserApp(String username);
}
