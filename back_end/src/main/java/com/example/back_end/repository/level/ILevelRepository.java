package com.example.back_end.repository.level;

import com.example.back_end.model.level.Level;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ILevelRepository extends JpaRepository<Level,Long> {
}
