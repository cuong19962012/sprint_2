package com.example.back_end.controller.album;

import com.example.back_end.model.album.AlbumProject;
import com.example.back_end.model.album.SongAlbum;
import com.example.back_end.model.album.SongAlbumDto;
import com.example.back_end.model.album.SongAlbumProjection;
import com.example.back_end.service.album.ISongAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/song-album")
public class SongAlbumController {
    @Autowired
    private ISongAlbumService songAlbumService;

    @GetMapping("/album/{albumId}")
    public ResponseEntity<?> getListAlbum(@PathVariable Long albumId) {
        List<SongAlbumProjection> listSongAlbum = songAlbumService.getListSongAlbumByAlbumId(albumId);
        if (listSongAlbum == null)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(listSongAlbum, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<?> createSongAlbum(@RequestBody SongAlbumDto songAlbumDto) {
        SongAlbum songAlbum = songAlbumService.addSongAlbum(songAlbumDto);
        if (songAlbum == null)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(songAlbum,HttpStatus.OK);
    }

}
