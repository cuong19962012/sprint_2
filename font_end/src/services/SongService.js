import axios from "axios";


export async function getListSongBySearch(searchKeyWord) {
        try {
                const result = await axios.get(`http://localhost:8080/api/song?searchKeyWord=${searchKeyWord}`);
                return result.data;
        } catch (e) {
                console.log(e);
        }

}
export async function searchSong(searchKeyWord, pageNumber) {
        try {
                const result = await axios.get(`http://localhost:8080/api/song/search?searchKeyWord=${searchKeyWord}&page=${pageNumber}&size=1`);
                return result.data;
        } catch (e) {
                console.log(e);
        }

}
export async function getSongById(songId) {
        try {
                const result = await axios.get(`http://localhost:8080/api/song/detail/${songId}`);
                return result.data;
        } catch (e) {
                console.log(e);
        }

}