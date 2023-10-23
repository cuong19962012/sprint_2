package com.example.back_end.service.type.impl;

import com.example.back_end.model.type.Type;
import com.example.back_end.repository.type.ITypeRepository;
import com.example.back_end.service.type.ITypeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TypeService implements ITypeService {
    @Autowired
    private ITypeRepository typeRepository;

    @Override
    public List<Type> findAll() {
        return typeRepository.findAll();
    }
}
