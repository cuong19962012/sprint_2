package com.example.back_end.controller.user_app;

import com.example.back_end.config.user_app.JwtTokenUtil;
import com.example.back_end.config.user_app.TokenManager;
import com.example.back_end.model.user_app.JwtRequest;
import com.example.back_end.model.user_app.JwtResponse;
import com.example.back_end.model.user_app.UserApp;
import com.example.back_end.model.user_app.UserAppDto;
import com.example.back_end.service.user_app.IUserAppService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.DisabledException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin("*")
public class UserAppController {
    @Autowired
    private AuthenticationManager authenticationManager;
    @Autowired
    private JwtTokenUtil jwtTokenUtil;
    @Autowired
    private IUserAppService userAppService;


    @PostMapping("/register")
    public ResponseEntity<UserApp> saveUserApp(@RequestBody UserAppDto userAppDto) throws Exception {
        return new ResponseEntity<>(userAppService.save(userAppDto), HttpStatus.OK);
    }

    @PostMapping("/authenticate")
    public ResponseEntity<?> createAuthenticationToken(@RequestBody JwtRequest authenticationRequest) throws Exception {
        authenticate(authenticationRequest.getUsername(), authenticationRequest.getPassword());
        final UserDetails userDetails = userAppService.loadUserByUsername(authenticationRequest.getUsername());
        UserApp userApp = userAppService.findUserAppByUsername(userDetails.getUsername());
        final String token = jwtTokenUtil.generateToken(userDetails);
        return new ResponseEntity<>(new JwtResponse(token, userApp), HttpStatus.OK);
    }

    @GetMapping("/api/user-app")
    public ResponseEntity<?> getUserAppById(@RequestParam(defaultValue = "") String username) {
        UserApp userApp = userAppService.findUserAppByUsername(username);
        if (userApp == null)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(userApp, HttpStatus.OK);
    }

    @PatchMapping("/api/user-app/upgrade/{username}")
    public ResponseEntity<?> upgradeForUserApp(@PathVariable String username) {
        try {
            userAppService.upgradeVipForUserApp(username);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    private void authenticate(String username, String password) throws Exception {
        try {
            authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(username, password));
        } catch (DisabledException e) {
            throw new Exception("USER_DISABLED", e);
        } catch (BadCredentialsException e) {
            throw new Exception("INVALID_CREDENTIALS", e);
        }
    }


}
