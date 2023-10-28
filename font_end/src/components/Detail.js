import { SideBar } from './SideBar'
import { NavBar } from './NavBar';
import { PlayWithLyrice } from './PlayerWithLyrics';
import { Lyrice } from './Lyrics';
import { useState } from 'react';
import * as SongService from '../services/SongService';
import * as AlbumService from '../services/AlbumService';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import * as UserAppService from '../services/UserAppService';
export function Detail() {
    const param = useParams();
    const [dataForLyrics, setDataForLyrics] = useState({});
    const [dataMusic, setDataMusic] = useState();
    const [listAlbum, setListAlbum] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        hanldBegin()
    }, [param.id])
    useEffect(()=>{
        handleRate(window.localStorage.getItem('username'));
    },[dataMusic]);
    const hanldBegin = async () => {
        await handleDataMusic();
        
        handleAlbumList();
    };
    const handleDataMusic = async () => {
        const result = await SongService.getSongById(param.id);
        setDataMusic(result);
    };
    const handleLyricsDataFromChild = (data) => {
        setDataForLyrics(data);
    };
    const handlePlaying = () => {
        document.getElementById("song-image")?.classList.add('spinner-border')
    };
    const handleStopped = () => {
        document.getElementById("song-image")?.classList.remove('spinner-border');
    };
    const handleAlbumList = async () => {
        if (window.localStorage.getItem('username')) {
            const result = await AlbumService.getAllAlbumByUsername(window.localStorage.getItem('username'));
            setListAlbum(result);
        }
    };
    const handleAddSongInAlbum = async (albumId) => {
        const songAlbum = {
            albumId: albumId,
            songId: param.id
        };
        const result = await AlbumService.addSongInAlbum(songAlbum);
    };
    const handleRate = async (username) => {
        const result = await UserAppService.getUserAppByUsername(username);
        if (dataMusic?.userLimit) {
            if (result?.rate?.name != 'vip' || result == null) {
                navigate("/");
            }
        }
    };

    return (
        <>
            <div className="container-fluid min-vh-100" style={{ backgroundColor: '#170f23' }}>
                <div className="row h-100">
                    <SideBar />
                    <div className="col-2 " />
                    <div className="col-10 h-100">
                        <NavBar />
                        <div className="container-fluid h-100 mt-4">
                            <div className="row">
                                <div className="col-8 d-flex align-items-center  overflow-hidden">
                                    <div className="card bg-transparent border-0 d-flex flex-column gap-2 align-items-center flex-grow-1  overflow-hidden">
                                        <div class="dropdown-center position-fixed z-3 text-center" style={{ right: '29%' }}>
                                            {
                                                window.localStorage.getItem('username') ?
                                                    <button class="btn btn-primary float-end " href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                                        Thêm vào album
                                                    </button> : ""
                                            }
                                            <ul class="dropdown-menu bg-transparent border-0 " >
                                                {
                                                    listAlbum?.map(item => (
                                                        <li key={item?.id} onClick={() => handleAddSongInAlbum(item?.id)} class="dropdown-item item-album text-light text-center rounded" style={{ cursor: 'pointer' }}>{item?.name}</li>
                                                    ))
                                                }
                                            </ul>
                                        </div>
                                        <img src={dataMusic?.image} id="song-image" className="h-50 w-50 object-fit-cover card-img-top rounded-circle " alt="..." />
                                        <h5 className="card-title text-decoration-underline text-light">{dataMusic?.name}</h5>
                                        <p style={{ color: '#6c757d' }}>{dataMusic?.singerName}</p>
                                        <div className="card-body p-0 w-100 player-detail flex-grow-1">
                                            <PlayWithLyrice handleStopped={handleStopped} handlePlaying={handlePlaying} getDataForLyrics={handleLyricsDataFromChild} songId={dataMusic?.id} source={dataMusic?.link} className='bg-transparent' />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-4">
                                    <div className="bg-transparent text-light overflow-auto" style={{ height: '30rem' }}>
                                        <p style={{ color: '#dddddd' }}>
                                            <Lyrice trackId={dataForLyrics.trackId}
                                                currentTime={dataForLyrics.currentTime} />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
}