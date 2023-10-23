package com.example.back_end.controller.type;

import com.example.back_end.model.type.Type;
import com.example.back_end.service.type.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/type")
public class TypeController {
    @Autowired
    private ITypeService typeService;

    @GetMapping("/")
    public ResponseEntity<List<Type>> findAll() {
        List<Type> list = typeService.findAll();
        if (list == null)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(list, HttpStatus.OK);
    }
}
