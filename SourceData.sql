-- rate
insert into rate ( name, flag_deleted) values ( 'member', false);
insert into rate ( name, flag_deleted) values ( 'vip', false);
-- user
insert into user_app (username, password,image, rate_id, flag_deleted) values ('admin', '$2a$10$EJTKLNAT6NLqQae14DbY2.Ubasi9H46gABGALgcOl7HmRCGjfv5kq','https://vnn-imgs-a1.vgcloud.vn/icdn.dantri.com.vn/2021/05/26/ngo-ngang-voi-ve-dep-cua-hot-girl-anh-the-chua-tron-18-docx-1622043349706.jpeg', 1, false);
insert into user_app (username, password,image, rate_id, flag_deleted) values ('user1', '$2a$10$EJTKLNAT6NLqQae14DbY2.Ubasi9H46gABGALgcOl7HmRCGjfv5kq','https://cacanh24.com/wp-content/uploads/2023/05/Mau-anh-the-nam.jpg', 1, false);
insert into user_app (username, password,image, rate_id, flag_deleted) values ('user2', '$2a$10$EJTKLNAT6NLqQae14DbY2.Ubasi9H46gABGALgcOl7HmRCGjfv5kq','https://toplist.vn/images/800px/studio-anh-khoa-792817.jpg', 2, false);
-- role
insert into role (name, flag_deleted) values ('admin', false);
insert into role (name, flag_deleted) values ('customer',false);
-- user_role
insert into user_app_role (user_app_id, role_id, flag_deleted) values (1, 1, false);
insert into user_app_role (user_app_id, role_id, flag_deleted) values (1, 2, false);
insert into user_app_role (user_app_id, role_id, flag_deleted) values (2, 2, false);
insert into user_app_role (user_app_id, role_id, flag_deleted) values (3, 2, false);
-- album
insert into album (name, user_app_id, flag_deleted) values ('Admin Album', 1, false);
insert into album (name, user_app_id, flag_deleted) values ('User1 Album', 2, false);
insert into album (name, user_app_id, flag_deleted) values ('User1 Album',3 , false);
-- type
insert into type (name, flag_deleted) values ('Nhạc trẻ', false);
insert into type (name, flag_deleted) values ('Nhạc Trịnh', false);
insert into type (name, flag_deleted) values ('Nhạc Bolero', false);
insert into type (name, flag_deleted) values ('Nhạc Nước Ngoài', false);
insert into type (name, flag_deleted) values ('Nhạc Phim', false);
-- singer
insert into singer (name, flag_deleted) values ('Đan Trường', false);
insert into singer (name, flag_deleted) values ('Khánh ly', false);
insert into singer (name, flag_deleted) values ('Dương Ngọc Thái', false);
insert into singer (name, flag_deleted) values ('HKT', false);
insert into singer (name, flag_deleted) values ('Mika Nakashima', false);
insert into singer (name, flag_deleted) values ('Hiền Thục', false);
-- author
insert into author (name, flag_deleted) values ('Trịnh Công Sơn', false);
insert into author (name, flag_deleted) values ('Hoài An', false);
insert into author (name, flag_deleted) values ('Hồng Xương Long', false);
insert into author (name, flag_deleted) values ('HKT', false);
insert into author (name, flag_deleted) values ('Việt Anh', false);
insert into author (name, flag_deleted) values ('Ryoki Matsumoto', false);

-- song
insert into song (id, name, image,link, release_date, author_id,user_limit,flag_deleted) values (1
, 'Mãi Mãi Một Tình Yêu','https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/covers/a/4/a436055e795a8c5c7245bd309d8ddf09_1341416839.jpg','https://api.mp3.zing.vn/api/streaming/audio/ZW6I78DE/128', '2023-10-08', 2,false, false);
insert into song (id, name,image, link, release_date, author_id,user_limit,flag_deleted) values (2
, 'Diễm Xưa','https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/7/0/7014824a73ba9e48258e1fdd40c56fdc_1434533181.jpg','https://api.mp3.zing.vn/api/streaming/audio/ZW7I7WAF/128', '2023-10-08', 1,false, false);
insert into song (id, name,image, link, release_date, author_id,user_limit,flag_deleted) values (3
, 'Trú Mưa','https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/4/c/4c99c999e0983f314e104c5821c48193_1299834031.jpg','https://api.mp3.zing.vn/api/streaming/audio/ZWZB080O/128', '2023-10-08', 4,false, false);
insert into song (id, name,image, link, release_date, author_id,user_limit,flag_deleted) values (4
, 'Yuki No Hana','https://photo-resize-zmp3.zmdcdn.me/w94_r1x1_jpeg/cover/2/4/b/8/24b8291ec2ddd0cfbe1eb223260ed257.jpg','https://api.mp3.zing.vn/api/streaming/audio/ZWA8IO98/128', '2023-10-08', 6,false, false);
insert into song (id, name, image,link, release_date, author_id,user_limit,flag_deleted) values (5
, 'Gọi Đò','https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/covers/5/d/5d53a29d54d4555a7cc234b4eff3a1c8_1290095562.jpg','http://api.mp3.zing.vn/api/streaming/audio/ZWZAIDB0/128', '2023-10-08', 3,false, false);
insert into song (id, name, image,link, release_date, author_id,user_limit,flag_deleted) values (6
, 'Giấc Mơ Ngày Xưa','https://photo-resize-zmp3.zmdcdn.me/w240_r1x1_jpeg/avatars/3/d/3dd204e3e26add7b5aaf658691f7de63_1510043928.jpg','https://api.mp3.zing.vn/api/streaming/audio/ZWZBUWIF/128', '2023-10-08', 5,false, false);

-- song_type
insert into song_type (song_id, type_id, flag_deleted) values (1, 1, false);
insert into song_type (song_id, type_id, flag_deleted) values (2, 2, false);
insert into song_type (song_id, type_id, flag_deleted) values (3, 1, false);
insert into song_type (song_id, type_id, flag_deleted) values (4, 4, false);
insert into song_type (song_id, type_id, flag_deleted) values (5, 3, false);
insert into song_type (song_id, type_id, flag_deleted) values (6, 1, false);
insert into song_type (song_id, type_id, flag_deleted) values (6, 5, false);
-- song_album
insert into song_album (song_id, album_id, flag_deleted) values (1, 1, false);
insert into song_album (song_id, album_id, flag_deleted) values (2, 1, false);
insert into song_album (song_id, album_id, flag_deleted) values (3, 1, false);
insert into song_album (song_id, album_id, flag_deleted) values (6, 2, false);
insert into song_album (song_id, album_id, flag_deleted) values (5, 2, false);
insert into song_album (song_id, album_id, flag_deleted) values (4, 2, false);
insert into song_album (song_id, album_id, flag_deleted) values (2, 3, false);
insert into song_album (song_id, album_id, flag_deleted) values (1, 3, false);
insert into song_album (song_id, album_id, flag_deleted) values (5, 3, false);
insert into song_album (song_id, album_id, flag_deleted) values (6, 3, false);
-- song_singer
insert into song_singer (song_id, singer_id, flag_deleted) values (1, 1, false);
insert into song_singer (song_id, singer_id, flag_deleted) values (2, 2, false);
insert into song_singer (song_id, singer_id, flag_deleted) values (3, 4, false);
insert into song_singer (song_id, singer_id, flag_deleted) values (4, 5, false);
insert into song_singer (song_id, singer_id, flag_deleted) values (5, 3, false);
insert into song_singer (song_id, singer_id, flag_deleted) values (6, 6, false);