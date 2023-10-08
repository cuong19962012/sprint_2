package com.example.back_end.model;

import javax.persistence.*;

@Entity
public class SongAlbum {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "album_id")
    private Album album;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "song_id")
    private Song song;
    private Boolean flagDeleted;

    public SongAlbum() {
    }

    public SongAlbum(Long id, Album album, Song song, Boolean flagDeleted) {
        this.id = id;
        this.album = album;
        this.song = song;
        this.flagDeleted = flagDeleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Album getAlbum() {
        return album;
    }

    public void setAlbum(Album album) {
        this.album = album;
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
