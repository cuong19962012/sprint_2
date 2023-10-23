package com.example.back_end.repository.album;

import com.example.back_end.model.album.SongAlbum;
import com.example.back_end.model.album.SongAlbumProjection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ISongAlbumRepository extends JpaRepository<SongAlbum, Long> {
    @Query(value = "select so.id ,\n" +
            "       so.name,\n" +
            "       so.link,\n" +
            "       so.image,\n" +
            "       so.user_limit as userLimit,\n" +
            "       a.name as albumName,\n" +
            "       group_concat(s.name) as singerName\n" +
            "from song so\n" +
            "         join song_album sa on so.id = sa.song_id\n" +
            "         join album a on a.id = sa.album_id\n" +
            "         join song_singer ss on so.id = ss.song_id\n" +
            "         join singer s on ss.singer_id = s.id\n" +
            "where so.flag_deleted = 0\n" +
            "  and a.id = :albumId \n" +
            "group by so.id", nativeQuery = true)
    List<SongAlbumProjection> getListSongAlbumByAlbumId(@Param("albumId") Long albumId);
}
