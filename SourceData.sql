-- level
insert into level ( name, flag_deleted) values ( 'member', false);
insert into level ( name, flag_deleted) values ( 'vip', false);
-- user
insert into user_app (username, password, level_id, flag_deleted) values ('admin', '$2a$10$EJTKLNAT6NLqQae14DbY2.Ubasi9H46gABGALgcOl7HmRCGjfv5kq', 1, false);
insert into user_app (username, password, level_id, flag_deleted) values ('user1', '$2a$10$EJTKLNAT6NLqQae14DbY2.Ubasi9H46gABGALgcOl7HmRCGjfv5kq', 1, false);
insert into user_app (username, password, level_id, flag_deleted) values ('user2', '$2a$10$EJTKLNAT6NLqQae14DbY2.Ubasi9H46gABGALgcOl7HmRCGjfv5kq', 2, false);
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
-- quality
insert into quality (name, flag_deleted) values ('360KB', false);
insert into quality (name, flag_deleted) values ('720KB', false);
-- song
insert into song (id, name, lyric, link, release_date, author_id,user_limit,flag_deleted) values (1
, 'Mãi Mãi Một Tình Yêu', 'Bài Hát: Liên Khúc Mãi Mãi Một Tình Yêu
Ca sĩ: Đan Trường
Đêm từng đêm
Khi màn sương
Buông xuống trên
Thênh thang bao nhiêu nẻo đường
Anh ngồi đây
Nhớ em nhiều
Và thầm mong
Một ngày rực rỡ tình yêu
Anh chờ em
Như lúc xưa
Như bây giờ
Và chờ đợi mai sau
Cho dù mưa giông
Cho dù nắng cháy
Anh vẫn chờ
Những tiếng cười
Rộn vang khung trời
Rồi lúc dỗi hờn
Em lặng im không nói
Những tháng ngày
Hồn nhiên nô đùa
Tuổi thơ tuyệt vời người ơi
Chiếc lá vàng
Nhẹ rơi cung đàn
Những nốt nhạc
Cho bài ca anh hát
Hát với đời
Ngày vui bên người
Để con tim nghe thiết tha
Lòng anh trót yêu em lâu rồi
Mà chưa dám nói câu yêu người
Sợ tình mong manh
Xóa nhòa ngày xanh
Đành câm nín
Em đâu hay tình anh
Mùa xuân đến bên em tươi cười
Hạ vàng tung nắng mai yêu đời
Mùa thu đi qua
Nói gì cùng em
Mùa đông đến
Anh lơ ngơ từng đêm
Ngày xưa đã cho anh hi vọng
Một mai em hiểu anh nỗi lòng
Cuộc đời cho ta
Qua nhiều ngày vui
Cần chi nói
Những lời đầu môi
Phải không em
Đêm từng đêm
Khi màn sương
Buông xuống trên
Thênh thang bao nhiêu nẻo đường
Anh ngồi đây
Nhớ em nhiều
Và thầm mong
Một ngày rực rỡ tình yêu
Anh chờ em
Như lúc xưa
Như bây giờ
Và chờ đợi mai sau
Cho dù mưa giông
Cho dù nắng cháy
Anh vẫn chờ
Những tiếng cười
Rộn vang khung trời
Rồi lúc dỗi hờn
Em lặng im không nói
Những tháng ngày
Hồn nhiên nô đùa
Tuổi thơ tuyệt vời người ơi
Chiếc lá vàng
Nhẹ rơi cung đàn
Những nốt nhạc
Cho bài ca anh hát
Hát với đời
Ngày vui bên người
Để con tim nghe thiết tha
Lòng anh trót yêu em lâu rồi
Mà chưa dám nói câu yêu người
Sợ tình mong manh
Xóa nhòa ngày xanh
Đành câm nín
Em đâu hay tình anh
Mùa xuân đến bên em tươi cười
Hạ vàng tung nắng mai yêu đời
Mùa thu đi qua
Nói gì cùng em
Mùa đông đến
Anh lơ ngơ từng đêm
Ngày xưa đã cho anh hi vọng
Một mai em hiểu anh nỗi lòng
Cuộc đời cho ta
Qua nhiều ngày vui
Cần chi nói
Những lời đầu môi
Phải không em
Ngày xưa đã cho anh hi vọng
Một mai em hiểu anh nỗi lòng
Cuộc đời cho ta
Qua nhiều ngày vui
Cần chi nói
Những lời đầu môi
Phải không em','#', '2023-10-08', 2,false, false);
insert into song (id, name, lyric, link, release_date, author_id,user_limit,flag_deleted) values (2
, 'Diễm Xưa', 'Bài hát: Diễm Xưa
Ca sĩ: Khánh Ly
Mưa vẫn mưa bay trên tầng tháp cổ
Dài tay em mấy thuở mắt xanh xao
Nghe lá thu mưa reo mòn gót nhỏ
Đường dài hun hút cho mắt thêm sâu
Mưa vẫn hay mưa trên hàng lá nhỏ
Buổi chiều ngồi ngóng
Những chuyến mưa qua
Trên bước chân em âm thầm lá đổ
Chợt hồn xanh buốt cho mình xót xa
Chiều nay còn mưa sao em không lại
Nhớ mãi trong cơn đau vùi
Làm sao có nhau, hằn lên nỗi đau
Bước chân em xin về mau
Mưa vẫn hay mưa cho đời biến động
Làm sao em nhớ những vết chim di
Xin hãy cho mưa qua miền đất rộng
Để người phiêu lãng
Quên mình lãng du
Mưa vẫn mưa bay trên tầng tháp cổ
Dài tay em mấy thuở mắt xanh xao
Nghe lá thu mưa reo mòn gót nhỏ
Đường dài hun hút cho mắt thêm sâu
Mưa vẫn hay mưa trên hàng lá nhỏ
Buổi chiều ngồi ngóng
Những chuyến mưa qua
Trên bước chân em âm thầm lá đổ
Chợt hồn xanh buốt cho mình xót xa
Chiều nay còn mưa sao em không lại
Nhớ mãi trong cơn đau vùi
Làm sao có nhau, hằn lên nỗi đau
Bước chân em xin về mau
Mưa vẫn hay mưa cho đời biến động
Làm sao em biết bia đá không đau
Xin hãy cho mưa qua miền đất rộng
Ngày sau sỏi đá cũng cần có nhau','#', '2023-10-08', 1,false, false);
insert into song (id, name, lyric, link, release_date, author_id,user_limit,flag_deleted) values (3
, 'Trú Mưa', 'Bài Hát: Trú Mưa
Ca sĩ: HKT
Cơn mưa rơi bên hiên hè vắng
đôi mình chung đường
Ta bên nhau tình cờ
Trú mưa bên thềm phút chốc
Em thơ ngây thơm hương
Làn tóc nhung huyền ngất ngây
Anh mê say ngu ngơ
Từng phút giây
Câu yêu thương trao em
Nồng cháy em đừng chối từ
Con tim anh không bao giờ
Nói những điều gian dối
Xin em tin anh đi
Người nhé những lời thiết tha
Hôm nay anh yêu em rồi bé ơi
Oh baby come to me
Này cô bé ơi
Chầm chậm thôi
Chớ bước đi nhanh
đừng vội bóp nát trái tim anh
Người nào có ước mơ trong anh
Hạt mưa hãy rơi
Được gần em thêm phút giây thôi
Dù ánh mắt đó quá xa xôi
Thì vẫn mãi cứ ước mơ thôi
Và anh vẫn tin
Một ngày mai sẽ có em
Tình sẽ chấp cánh bay xa
Và hạnh phúc sẽ mãi theo ta
Được xin có em
Này người ơi chớ bước đi
Đừng để trống vắng trong tim
Rồi được thấy giấc mơ trong anh
Đẹp như chính em
Cơn mưa rơi bên hiên hè vắng
đôi mình chung đường
Ta bên nhau tình cờ
Trú mưa bên thềm phút chốc
Em thơ ngây thơm hương
Làn tóc nhung huyền ngất ngây
Anh mê say ngu ngơ
Từng phút giây
Câu yêu thương trao em
Nồng cháy em đừng chối từ
Con tim anh không bao giờ
Nói những điều gian dối
Xin em tin anh đi
Người nhé những lời thiết tha
Hôm nay anh yêu em rồi bé ơi
Oh baby come to me
Này cô bé ơi
Chầm chậm thôi
Chớ bước đi nhanh
đừng vội bóp nát trái tim anh
Người nào có ước mơ trong anh
Hạt mưa hãy rơi
Được gần em thêm phút giây thôi
Dù ánh mắt đó quá xa xôi
Thì vẫn mãi cứ ước mơ thôi
Và anh vẫn tin
Một ngày mai sẽ có em
Tình sẽ chấp cánh bay xa
Và hạnh phúc sẽ mãi theo ta
Được xin có em
Này người ơi chớ bước đi
Đừng để trống vắng trong tim
Rồi được thấy giấc mơ trong anh
Và anh vẫn tin
Một ngày mai sẽ có em
Tình sẽ chấp cánh bay xa
Và hạnh phúc sẽ mãi theo ta
Được xin có em
Này người ơi chớ bước đi
Đừng để trống vắng trong tim
Rồi được thấy giấc mơ trong anh
Đẹp như chính em','#', '2023-10-08', 4,false, false);
insert into song (id, name, lyric, link, release_date, author_id,user_limit,flag_deleted) values (4
, 'Yuki No Hana', 'Nobita kage o hodou ni narabe
You yami no naka
O kimi to aruite-ru
Te o tsunaide itsu mademo zutto
Soba ni ireta nara nakechau kurai
Kaze ga tsumetaku natte
Fuyu no nioi ga shita
Sorosoro kono machi ni
Kimi to chika-zukeru kisetsu ga kuru
Kotoshi saisho no
Yuki no hana o
Futari yori sotte
Nagamete iru kono toki ni
Shiawase ga afure-dasu
Amae toka yowasa janai
Tada kimi o aishite-ru
Kokoro kara sou omotta
Kimi ga iru to donna koto demo
Nori-kireru youna kimochi ni natte-ru
Konna hibi ga itsu mademo kitto
Tsuzuite-ku koto o inotte iru yo
Kaze ga mado o yurashita
Yoru wa yuri-okoshite
Donna kanashii koto mo
Boku ga egao e to kaete ageru
Mai-ochite kita yuki no hana ga
Mado no soto zutto
Furi-yamu koto o shirazu ni
Bokura no machi o someru
Dareka no tame ni nanika o
Shitai to omoeru no ga
Ai to iu koto o shitta
Moshi kimi o ushinatta to shita nara
Hoshi ni natte kimi o terasu darou
Egao mo namida ni nurete-ru yoru mo
Itsu mo itsu demo soba ni iru yo
Kotoshi saisho no yuki no hana o
Futari yori sotte
Nagameteiru kono toki ni
Shiawase ga afure-dasu
Amae toka yowasa janai
Tada kimi to zutto
Kono mama issho ni itai
Sunao ni sou omoeru
Kono machi ni furi tsumotte-ku
Masshir o na yuki no hana
Futari no mune ni sotto
Omoide o egaku yo
Kore kara mo kimi to zutto','#', '2023-10-08', 6,false, false);
insert into song (id, name, lyric, link, release_date, author_id,user_limit,flag_deleted) values (5
, 'Gọi Đò', 'Bài Hát: Gọi Đò
Ca sĩ: Dương Ngọc Thái
Gọi đò ơi!
Ai giúp đưa tôi
Kịp sang đò
Bên kia sông thề
Người ta đang
Tưng bừng đón dâu
Gọi đò ơi..!
Cớ sao không có ai
Đưa đò?
Để con đò buồn
Hiu quạnh bến quê
Chẳng còn ai nhớ mong
Mình về.
Ngày đi....
Em đưa tôi qua đò chiều
Em hứa bao điều
Mãi đợi chờ nhau
Nhưng mà sao em lại...
Quên....?
Em quên câu yêu thương
Bao năm xa quê hương
Nay lại về
Sắt son câu thề
Mà người xưa bỏ bến ...
Theo chồng.
Đò ơi....!
Ai đưa tôi qua đò chiều
Cho nhắn đôi điều đến
Người mình yêu
Tiếng hò ai
Nghe buồn thiu!
Mai đi xa quê hương
Mang trong tim yêu thương
Duyên tình đầu
Thiết tha hôm nào
Mà giờ đây
Như nước qua cầu.
Gọi đò ơi!
Ai giúp đưa tôi
Kịp sang đò
Bên kia sông thề
Người ta đang
Tưng bừng đón dâu
Gọi đò ơi..!
Cớ sao không có ai
Đưa đò?
Để con đò buồn
Hiu quạnh bến quê
Chẳng còn ai nhớ mong
Mình về.
Ngày đi....
Em đưa tôi qua đò chiều
Em hứa bao điều
Mãi đợi chờ nhau
Nhưng mà sao em lại...
Quên....?
Em quên câu yêu thương
Bao năm xa quê hương
Nay lại về
Sắt son câu thề
Mà người xưa bỏ bến ...
Theo chồng.
Đò ơi....!
Ai đưa tôi qua đò chiều
Cho nhắn đôi điều đến
Người mình yêu
Tiếng hò ai
Nghe buồn thiu!
Mai đi xa quê hương
Mang trong tim yêu thương
Duyên tình đầu
Thiết tha hôm nào
Mà giờ đây
Như nước qua cầu.
Gọi đò ơi!
Gọi đò ơi!
Ơi đò!
Ơi hỡi đò ơi!
Gọi đò ơi!
Gọi đò ơi!
Ai đưa tôi qua đò?
Ơi hỡi đò ơi!
Gọi đò ơi!
Gọi đò ơi!
Ơi đò!
Ơi hỡi đò ơi!','#', '2023-10-08', 3,false, false);
insert into song (id, name, lyric, link, release_date, author_id,user_limit,flag_deleted) values (6
, 'Giấc Mơ Ngày Xưa', 'Bài Hát: Giấc Mơ Ngày Xưa
Ca sĩ: Hiền Thục
Tôi vẫn đi qua
Những con đường quen
Bạn có nhớ
đến tôi bao giờ
Từng ngày trôi qua
Chúng ta lại thêm cách xa
Cuộc đời có những
Hạnh phúc thật gần
Tôi vẫn mơ
Giấc mơ ngày xưa đấy thôi
Chuyện gì quên
Nhớ hết những nụ cười
Ngày mai đây
Hãy tin là thế
Và khi ấy
Còn nhận ra nhau
Mang theo ánh nắng
Mang theo tiếng cười
Bắt đầu từ đó
Ra đi tìm ước mơ
Rong chơi biết có
Nỗi đau vô cùng
Khi dừng chân mới
Hay ta xa lạ
Ngêu ngao câu hát
ánh trăng theo về
Nơi nào mái ấm
Những bạn bè thân
Ôi! Mênh mang quá
Biết đâu quê nhà
Câu chuyện xưa ấy
Tưởng chừng ta quên
Tôi vẫn mơ
Giấc mơ ngày xưa đấy thôi
Chuyện gì quên
Nhớ hết những nụ cười
Ngày mai đây
Hãy tin là thế
Và khi ấy
Còn nhận ra nhau
Mang theo ánh nắng
Mang theo tiếng cười
Bắt đầu từ đó
Ra đi tìm ước mơ
Rong chơi biết có
Nỗi đau vô cùng
Khi dừng chân mới
Hay ta xa lạ
Ngêu ngao câu hát
ánh trăng theo về
Nơi nào mái ấm
Những bạn bè thân
Ôi! Mênh mang quá
Biết đâu quê nhà
Câu chuyện xưa ấy
Tưởng chừng ta quên
Mang theo ánh nắng
Mang theo tiếng cười
Bắt đầu từ đó
Ra đi tìm ước mơ
Rong chơi biết có
Nỗi đau vô cùng
Khi dừng chân mới
Hay ta xa lạ
Ngêu ngao câu hát
ánh trăng theo về
Nơi nào mái ấm
Những bạn bè thân
Ôi! Mênh mang quá
Biết đâu quê nhà
Câu chuyện xưa ấy
Tưởng chừng ta quên
Tôi vẫn đi qua
Những con đường quen
Chuyện gì quên
Nhớ hết những nụ cười
Tôi vẫn mơ
Giấc mơ ngày xưa đấy thôi
Nằm ngắm mây
Lướt qua bầu trời','#', '2023-10-08', 5,false, false);
-- song_quality
insert into song_quality (song_id, quality_id, flag_deleted) values (1, 1, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (1, 2, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (2, 1, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (2, 2, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (3, 1, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (3, 2, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (4, 1, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (4, 2, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (5, 1, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (5, 2, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (6, 1, false);
insert into song_quality (song_id, quality_id, flag_deleted) values (6, 2, false);
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