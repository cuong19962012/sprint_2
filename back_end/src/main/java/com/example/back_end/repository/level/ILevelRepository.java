package com.example.back_end.repository.level;

import com.example.back_end.model.level.Rate;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILevelRepository extends JpaRepository<Rate,Long> {
}
