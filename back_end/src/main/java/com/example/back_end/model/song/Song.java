package com.example.back_end.model.song;

import com.example.back_end.model.author.Author;

import javax.persistence.*;
import java.sql.Date;

@Entity
public class Song {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    @Column(columnDefinition = "LONGTEXT")
    private String lyric;
    @Column(columnDefinition = "TEXT")
    private String link;
    @Column(columnDefinition = "date")
    private Date releaseDate;
    private Boolean userLimit;
    @Column(columnDefinition = "TEXT")
    private String image;
    @ManyToOne
    @JoinColumn(referencedColumnName = "id", name = "author_id")
    private Author author;
    private Boolean flagDeleted;

    public Song() {
    }

    public Song(Long id, String name, String lyric, String link, Date releaseDate, Boolean userLimit, String image, Author author, Boolean flagDeleted) {
        this.id = id;
        this.name = name;
        this.lyric = lyric;
        this.link = link;
        this.releaseDate = releaseDate;
        this.userLimit = userLimit;
        this.image = image;
        this.author = author;
        this.flagDeleted = flagDeleted;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLyric() {
        return lyric;
    }

    public void setLyric(String lyric) {
        this.lyric = lyric;
    }

    public String getLink() {
        return link;
    }

    public void setLink(String link) {
        this.link = link;
    }

    public Date getReleaseDate() {
        return releaseDate;
    }

    public void setReleaseDate(Date releaseDate) {
        this.releaseDate = releaseDate;
    }

    public Boolean getUserLimit() {
        return userLimit;
    }

    public void setUserLimit(Boolean userLimit) {
        this.userLimit = userLimit;
    }

    public Author getAuthor() {
        return author;
    }

    public void setAuthor(Author author) {
        this.author = author;
    }

    public Boolean getFlagDeleted() {
        return flagDeleted;
    }

    public void setFlagDeleted(Boolean flagDeleted) {
        this.flagDeleted = flagDeleted;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }
}
