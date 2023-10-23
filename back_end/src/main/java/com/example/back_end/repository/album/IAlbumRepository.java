package com.example.back_end.repository.album;

import com.example.back_end.model.album.Album;
import com.example.back_end.model.album.AlbumProject;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

public interface IAlbumRepository extends JpaRepository<Album, Long> {
    @Query(value = "select a.id as id ,a.name as name,count(sa.song_id) as quantity\n" +
            "from album a\n" +
            "left join song_album sa on a.id = sa.album_id\n" +
            "where a.flag_deleted = 0\n" +
            "  and a.user_app_id = :userAppId \n" +
            "group by a.id", nativeQuery = true)
    List<AlbumProject> getListAlbum(@Param("userAppId") Long userAppId);

    @Query(value = "update album set flag_deleted=true where id = :albumId", nativeQuery = true)
    @Transactional
    @Modifying
    Integer removeAlbumByAlbumId(@Param("albumId") Long albumId);

}
