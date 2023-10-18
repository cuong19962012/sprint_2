import { SideBar } from './SideBar'
import { NavBar } from './NavBar';
import { PlayWithLyrice } from './PlayerWithLyrics';
import M from '../source/VanNho-TuanHung-4044663.mp3'
import { Lyrice } from './Lyrics';
import { useState } from 'react';
import axios from 'axios';

export function Detail() {
    const [dataForLyrics, setDataForLyrics] = useState({});
    const [dataMusic, setDataMusic] = useState();
    // Function to handle data updates from the child component
    const handleLyricsDataFromChild = (data) => {
        setDataForLyrics(data);
    };
    const callApi = async () => {
        try {
            const result = await axios.get("https://mp3.zing.vn/xhr/recommend?type=audio&id=6BC8ODZ6");
            console.log(result);
        } catch (error) {
            console.log(error);
        }
    }
    callApi();
    return (
        <>
            <div className="container-fluid overflow-hidden" style={{ backgroundColor: '#170f23' }}>
                <div className="row">

                    <SideBar

                    />
                    <div className="col-2" />
                    <div className="col-10 p-0 m-0">
                        <NavBar />
                        <div className="container-fluid p-5 ">
                            <div className="row h-auto">
                                <div className="col-8 d-flex justify-content-center align-items-center">
                                    <div className="card bg-transparent border-0 d-flex flex-column gap-2 align-items-center flex-grow-1">
                                        <img src="https://photo-resize-zmp3.zmdcdn.me/w320_r1x1_jpeg/cover/1/0/1/1/101112c380993dacfd37836080b463dc.jpg" className="h-50 w-50 object-fit-cover card-img-top rounded-circle spinner-border" alt="..." />
                                        <h5 className="card-title text-decoration-underline text-light">Thêm một ai dư thừa</h5>
                                        <p style={{ color: '#6c757d' }}>JUUN D,Bảo Anh, ERIK, Mui Lê</p>
                                        <div className="card-body p-0 w-100">
                                            <PlayWithLyrice number={3} getDataForLyrics={handleLyricsDataFromChild} source={"https://api.mp3.zing.vn/api/streaming/audio/ZW6I78DE/128"} className='bg-transparent' style={{ width: '100%' }} />
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