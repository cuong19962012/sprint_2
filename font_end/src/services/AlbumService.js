import axios from "axios";
export async function getAllAlbumByUsername(username) {
    try {
        const result = await axios.get(`http://localhost:8080/api/album/list?username=${username}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export async function createAlbum(album) {
    try {
        const result = await axios.post(`http://localhost:8080/api/album/create`, album);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export async function editAlbum(album) {
    try {
        const result = await axios.patch(`http://localhost:8080/api/album/edit`, album);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export async function removeAlbum(albumId) {
    try {
        const result = await axios.delete(`http://localhost:8080/api/album/delete/${albumId}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}

export async function getListSongByAlbumId(albumId) {
    try {
        const result = await axios.get(`http://localhost:8080/api/song-album/album/${albumId}`);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}
export async function addSongInAlbum(songAlbum) {
    try {
        const result = await axios.post(`http://localhost:8080/api/song-album/create`, songAlbum);
        return result.data;
    } catch (e) {
        console.log(e);
    }
}