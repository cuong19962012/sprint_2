package com.example.back_end.model.song;

import java.sql.Date;

public interface SongProjection {
    Long getId();

    String getName();
    String getLink();

    Date getReleaseDate();

    Boolean getUserLimit();

    String getImage();

    String getSingerName();

}
