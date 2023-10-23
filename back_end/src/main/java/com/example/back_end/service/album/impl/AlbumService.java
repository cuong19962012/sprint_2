package com.example.back_end.service.album.impl;

import com.example.back_end.model.album.Album;
import com.example.back_end.model.album.AlbumDto;
import com.example.back_end.model.album.AlbumProject;
import com.example.back_end.model.user_app.UserApp;
import com.example.back_end.repository.album.IAlbumRepository;
import com.example.back_end.repository.user_app.IUserAppRepository;
import com.example.back_end.service.album.IAlbumService;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AlbumService implements IAlbumService {
    @Autowired
    private IAlbumRepository albumRepository;
    @Autowired
    private IUserAppRepository userAppRepository;


    @Override
    public List<AlbumProject> getListAlbum(String username) {
        UserApp userApp = userAppRepository.findByUsername(username);
        return albumRepository.getListAlbum(userApp.getId());
    }

    @Override
    public Album createAlbum(AlbumDto albumDto) {
        Album album = new Album();
        BeanUtils.copyProperties(albumDto, album);
        album.setFlagDeleted(false);
        album.setUser(userAppRepository.findByUsername(albumDto.getUsername()));
        return albumRepository.save(album);
    }

    @Override
    public Album editAlbum(AlbumDto albumDto) {
        Album album = new Album();
        BeanUtils.copyProperties(albumDto, album);
        album.setFlagDeleted(false);
        album.setUser(userAppRepository.findByUsername(albumDto.getUsername()));
        return albumRepository.save(album);
    }

    @Override
    public void removeAlbum(Long albumId) {
        albumRepository.removeAlbumByAlbumId(albumId);
    }
}
