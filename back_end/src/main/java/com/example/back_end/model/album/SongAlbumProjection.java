package com.example.back_end.model.album;

public interface SongAlbumProjection {
    Long getId();

    String getName();

    String getLink();

    String getImage();

    Boolean getUserLimit();

    String getAlbumName();

    String getSingerName();
}
