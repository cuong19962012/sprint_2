package com.example.back_end.controller.author;

import com.example.back_end.model.author.Author;
import com.example.back_end.service.author.IAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/author")
public class AuthorController {
    @Autowired
    private IAuthorService authorService;

    @GetMapping("")
    public ResponseEntity<List<Author>> getListSongBySearch(@RequestParam(defaultValue = "") String searchKeyWord) {
        List<Author> listAuthorBySearch = authorService.getListAuthorBySearch(searchKeyWord);
        if (listAuthorBySearch == null)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(listAuthorBySearch, HttpStatus.OK);
    }
}
