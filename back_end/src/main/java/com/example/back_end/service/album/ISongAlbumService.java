package com.example.back_end.service.album;

import com.example.back_end.model.album.SongAlbum;
import com.example.back_end.model.album.SongAlbumDto;
import com.example.back_end.model.album.SongAlbumProjection;

import java.util.List;

public interface ISongAlbumService {
    List<SongAlbumProjection> getListSongAlbumByAlbumId(Long albumId);

    SongAlbum addSongAlbum(SongAlbumDto songAlbumDto);
}
