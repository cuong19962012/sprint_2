package com.example.back_end.service.album.impl;

import com.example.back_end.model.album.Album;
import com.example.back_end.model.album.SongAlbum;
import com.example.back_end.model.album.SongAlbumDto;
import com.example.back_end.model.album.SongAlbumProjection;
import com.example.back_end.model.song.Song;
import com.example.back_end.repository.album.ISongAlbumRepository;
import com.example.back_end.service.album.ISongAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SongAlbumService implements ISongAlbumService {
    @Autowired
    private ISongAlbumRepository songAlbumRepository;

    @Override
    public List<SongAlbumProjection> getListSongAlbumByAlbumId(Long albumId) {
        return songAlbumRepository.getListSongAlbumByAlbumId(albumId);
    }

    @Override
    public SongAlbum addSongAlbum(SongAlbumDto songAlbumDto) {
        Album album = new Album();
        album.setId(songAlbumDto.getAlbumId());
        Song song = new Song();
        song.setId(songAlbumDto.getSongId());
        return songAlbumRepository.save(new SongAlbum(null, album, song, false));
    }
}
