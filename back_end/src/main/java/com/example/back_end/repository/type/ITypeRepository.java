package com.example.back_end.repository.type;

import com.example.back_end.model.type.Type;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ITypeRepository extends JpaRepository<Type, Long> {
}
