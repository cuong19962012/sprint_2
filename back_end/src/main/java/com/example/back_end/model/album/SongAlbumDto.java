package com.example.back_end.model.album;


public class SongAlbumDto {
    private Long albumId;
    private Long songId;
    public SongAlbumDto() {
    }

    public SongAlbumDto(Long albumId, Long songId) {
        this.albumId = albumId;
        this.songId = songId;
    }

    public Long getAlbumId() {
        return albumId;
    }

    public void setAlbumId(Long albumId) {
        this.albumId = albumId;
    }

    public Long getSongId() {
        return songId;
    }

    public void setSongId(Long songId) {
        this.songId = songId;
    }

}
