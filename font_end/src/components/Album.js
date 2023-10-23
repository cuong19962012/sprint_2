import { Player } from './Player';
import { SideBar } from './SideBar'
import { NavBar } from './NavBar';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import * as AlbumService from '../services/AlbumService';

export function Album() {
    const [currentTrack, setTrackIndex] = useState(0);
    const [playlist, setPlayList] = useState([]);
    const param = useParams();

    useEffect(() => {
        getListSongByAlbumId(param.id);
    }, [param.id]);

    const getListSongByAlbumId = async (albumId) => {
        const result = await AlbumService.getListSongByAlbumId(albumId);
        console.log(result);
        setPlayList(result);
    };
    const handleClickNext = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };
    const handleClickPrevious = () => {
        setTrackIndex((currentTrack) =>
            currentTrack > 0 ? currentTrack - 1 : 0
        );
    };

    const handleEnd = () => {
        setTrackIndex((currentTrack) =>
            currentTrack < playlist.length - 1 ? currentTrack + 1 : 0
        );
    };

    const handleChangeSong = (index) => {
        setTrackIndex(index);
    };
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: '#170f23' }}>
                <div className="row">
                    <SideBar />
                    <div className="col-2" style={{ backgroundColor: '#170f23' }} />
                    <div className="col-10 p-0 m-0 min-vh-100 position-relative" style={{ backgroundColor: '#170f23' }}>
                        <NavBar />
                        <div className="container-fluid pt-5 pb-0" >
                            <div className="card mt-4 " style={{ backgroundColor: '#221b2e' }}>
                                <div className="card-header text-light h3">{playlist[0]?.albumName}</div>
                                <div className="card-body">
                                    <ul class="list-group list-group-flush">

                                        {
                                            playlist.map((item, index) => (

                                                <li class="list-group-item bg-transparent position-relative" key={item.id}>
                                                    <div className="float-start position-relative mx-auto d-inline" >
                                                        <img src={item.image}
                                                            style={{ height: "3rem", width: "3rem" }} className='rounded' />

                                                        {
                                                            currentTrack == index ?
                                                                <div className="spinner-grow position-absolute" style={{ left: '0.5rem', bottom: '0.5rem' }} role="status">
                                                                    <span className="visually-hidden">Loading...</span>
                                                                </div> : ""
                                                        }

                                                    </div>
                                                    <div className='float-start mx-2'>
                                                        <div className='text-light text-decoration-underline' onClick={() => handleChangeSong(index)} style={{ cursor: 'pointer' }} >{item.name}</div>
                                                        <div className='text-light-emphasis'>{item.singerName}</div>
                                                    </div>
                                                </li>

                                            ))
                                        }

                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="footer-player container">
                            <Player handleClickPrevious={handleClickPrevious} handleClickNext={handleClickNext} handleEnd={handleEnd} source={playlist[currentTrack]?.link} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}