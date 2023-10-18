package com.example.back_end.service.song;

import com.example.back_end.model.song.Song;
import com.example.back_end.model.song.SongProjection;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ISongService {
    List<Song> getListSongBySearch(String searchKeyWord);
    Page<SongProjection> getListSongBySearched(Pageable pageable, String searchKeyWord);
    SongProjection getSongBySongId(Long songId);
}
