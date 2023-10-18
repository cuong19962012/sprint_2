package com.example.back_end.controller.song;

import com.example.back_end.model.song.Song;
import com.example.back_end.model.song.SongProjection;
import com.example.back_end.service.song.ISongService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin("*")
@RequestMapping("/api/song")
public class SongController {
    @Autowired
    private ISongService songService;

    @GetMapping("")
    public ResponseEntity<List<Song>> getListSongBySearch(@RequestParam(defaultValue = "") String searchKeyWord) {
        List<Song> listSongBySearch = songService.getListSongBySearch(searchKeyWord);
        if (listSongBySearch == null)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(listSongBySearch, HttpStatus.OK);
    }

    @GetMapping("/search")
    public ResponseEntity<Page<SongProjection>> getListSongBySearched(
            @RequestParam String searchKeyWord
            , @RequestParam(defaultValue = "0") int page
            , @RequestParam(defaultValue = "1") int size
    ) {
        Pageable pageable = PageRequest.of(page, size);
        Page<SongProjection> songList = songService.getListSongBySearched(pageable, searchKeyWord);
        if (songList == null)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(songList, HttpStatus.OK);
    }

    @GetMapping("/detail/{id}")
    ResponseEntity<SongProjection> getSongBySongId(@PathVariable Long id) {
        SongProjection songProjection = songService.getSongBySongId(id);
        if (songProjection == null)
            return new ResponseEntity<>(HttpStatus.NO_CONTENT);
        return new ResponseEntity<>(songProjection, HttpStatus.OK);
    }
}
