package com.example.back_end.service.album;

import com.example.back_end.model.album.Album;
import com.example.back_end.model.album.AlbumDto;
import com.example.back_end.model.album.AlbumProject;

import java.util.List;

public interface IAlbumService {
    List<AlbumProject> getListAlbum(String username);

    Album createAlbum(AlbumDto albumDto);

    Album editAlbum(AlbumDto album) ;

    void removeAlbum(Long albumId);
}
