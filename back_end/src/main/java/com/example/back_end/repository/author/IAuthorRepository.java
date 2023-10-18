package com.example.back_end.repository.author;

import com.example.back_end.model.author.Author;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface IAuthorRepository extends JpaRepository<Author, Long> {
    @Query(value = "select * from author\n" +
            "where flag_deleted = 0 and name like :searchKeyWord \n" +
            "limit 3",nativeQuery = true)
    List<Author> getListAuthorBySearch(@Param("searchKeyWord")String searchKeyWord);
}
