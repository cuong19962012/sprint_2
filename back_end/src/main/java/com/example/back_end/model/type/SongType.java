package com.example.back_end.model.type;

import com.example.back_end.model.song.Song;

import javax.persistence.*;

@Entity
public class SongType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "type_id")
    private Type type;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "song_id")
    private Song song;

    private Boolean flagDeleted;

    public SongType() {
    }

    public SongType(Long id, Type type, Song song, Boolean flagDeleted) {
        this.id = id;
        this.type = type;
        this.song = song;
        this.flagDeleted = flagDeleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Type getType() {
        return type;
    }

    public void setType(Type type) {
        this.type = type;
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
