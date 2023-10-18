package com.example.back_end.service.author;

import com.example.back_end.model.author.Author;

import java.util.List;

public interface IAuthorService {
    List<Author> getListAuthorBySearch(String searchKeyWord);
}
