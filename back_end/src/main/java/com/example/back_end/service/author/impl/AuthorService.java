package com.example.back_end.service.author.impl;

import com.example.back_end.model.author.Author;
import com.example.back_end.repository.author.IAuthorRepository;
import com.example.back_end.service.author.IAuthorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AuthorService implements IAuthorService {
    @Autowired
    private IAuthorRepository authorRepository;

    @Override
    public List<Author> getListAuthorBySearch(String searchKeyWord) {
        return authorRepository.getListAuthorBySearch("%"+searchKeyWord+"%");
    }
}
