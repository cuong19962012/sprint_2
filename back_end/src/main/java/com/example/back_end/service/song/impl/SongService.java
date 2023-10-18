package com.example.back_end.service.song.impl;

import com.example.back_end.model.song.Song;
import com.example.back_end.model.song.SongProjection;
import com.example.back_end.repository.song.ISongRepository;
import com.example.back_end.service.song.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongService implements ISongService {
    @Autowired
    private ISongRepository songRepository;

    @Override
    public List<Song> getListSongBySearch(String searchKeyWord) {
        return songRepository.getListSongBySearch("%" + searchKeyWord + "%");
    }

    @Override
    public Page<SongProjection> getListSongBySearched(Pageable pageable, String searchKeyWord) {
        return songRepository.getListSongBySearched(pageable, "%" + searchKeyWord + "%");
    }

    @Override
    public SongProjection getSongBySongId(Long songId) {
        return songRepository.getSongBySongId(songId);
    }


}
