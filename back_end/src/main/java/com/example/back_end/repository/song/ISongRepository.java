package com.example.back_end.repository.song;

import com.example.back_end.model.song.Song;
import com.example.back_end.model.song.SongProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ISongRepository extends JpaRepository<Song, Long> {
    @Query(value = "select * from song\n" +
            "where flag_deleted = 0 and name like :searchKeyWord \n" +
            "limit 3", nativeQuery = true)
    List<Song> getListSongBySearch(@Param("searchKeyWord") String searchKeyWord);

    @Query(value = "select so.id                as id\n" +
            "     , so.name              as name\n" +
            "     , so.release_date      as releaseDate\n" +
            "     , so.user_limit        as userLimit\n" +
            "     , so.image             as image\n" +
            "     , group_concat(s.name) as singerName\n" +
            "from song so\n" +
            "         join song_singer ss on so.id = ss.song_id\n" +
            "         join singer s on ss.singer_id = s.id\n" +
            "where so.name like :searchKeyWord and so.flag_deleted=0\n" +
            "group by so.id ", nativeQuery = true)
    Page<SongProjection> getListSongBySearched(Pageable pageable, @Param("searchKeyWord") String searchKeyWord);


    @Query(value = "select so.id as id \n" +
            ", so.name as name \n" +
            ", so.release_date as releaseDate " +
            ", so.link\n" +
            ", so.user_limit as userLimit \n" +
            ", so.image as image \n" +
            ", group_concat(s.name) as singerName \n" +
            "from song so \n" +
            "join song_singer ss on so.id = ss.song_id \n" +
            "join singer s on ss.singer_id = s.id \n" +
            "where so.id = :id and so.flag_deleted=0 \n" +
            "group by so.id", nativeQuery = true)
    SongProjection getSongBySongId(@Param(value = "id") Long songId);
}
