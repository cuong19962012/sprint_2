package com.example.back_end.model.singer;

import com.example.back_end.model.singer.Singer;
import com.example.back_end.model.song.Song;

import javax.persistence.*;

@Entity
public class SongSinger {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "singer_id")
    private Singer singer;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "song_id")
    private Song song;
    private Boolean flagDeleted;

    public SongSinger() {
    }

    public SongSinger(Long id, Singer singer, Song song, Boolean flagDeleted) {
        this.id = id;
        this.singer = singer;
        this.song = song;
        this.flagDeleted = flagDeleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Singer getSinger() {
        return singer;
    }

    public void setSinger(Singer singer) {
        this.singer = singer;
    }

    public Song getSong() {
        return song;
    }

    public void setSong(Song song) {
        this.song = song;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }
}
