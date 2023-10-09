package com.example.back_end.controller.user_app;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class TestController {
    @GetMapping("/hello")
    public String firstPage() {
        return "Hello World";
    }
}
