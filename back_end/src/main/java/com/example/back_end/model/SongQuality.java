package com.example.back_end.model;

import javax.persistence.*;

@Entity
public class SongQuality {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "quality_id")
    private Quality quality;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "song_id")
    private Song song;
    private Boolean flagDeleted;

    public SongQuality() {
    }

    public SongQuality(Long id, Quality quality, Song song, Boolean flagDeleted) {
        this.id = id;
        this.quality = quality;
        this.song = song;
        this.flagDeleted = flagDeleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Quality getQuality() {
        return quality;
    }

    public void setQuality(Quality quality) {
        this.quality = quality;
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
