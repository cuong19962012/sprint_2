package com.example.back_end.controller.album;

import com.example.back_end.model.album.Album;
import com.example.back_end.model.album.AlbumDto;
import com.example.back_end.model.album.AlbumProject;
import com.example.back_end.service.album.IAlbumService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/album")
public class AlbumController {
    @Autowired
    private IAlbumService albumService;

    @GetMapping("/list")
    public ResponseEntity<?> getListAlbum(@RequestParam(value = "username") String username) {
        List<AlbumProject> listAlbum = albumService.getListAlbum(username);
        if (listAlbum == null)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(listAlbum, HttpStatus.OK);
    }

    @PostMapping("/create")
    public ResponseEntity<Album> createAlbum(@RequestBody AlbumDto albumDto) {
        Album album = albumService.createAlbum(albumDto);
        if (album == null)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(album, HttpStatus.OK);
    }

    @PatchMapping("/edit")
    public ResponseEntity<Album> editAlbum(@RequestBody AlbumDto albumDto) {
        Album album = albumService.editAlbum(albumDto);
        if (album == null)
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        return new ResponseEntity<>(album, HttpStatus.OK);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity deleteAlbum(@PathVariable Long id) {
        try {
            albumService.removeAlbum(id);
            return new ResponseEntity<>(HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }


}
