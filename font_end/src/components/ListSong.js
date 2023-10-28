import { Link, useParams } from "react-router-dom";
import * as SongService from "../services/SongService";
import { useState } from "react";
import { Pagination } from "./Pagination";
import { useEffect } from "react";
import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { ToastContainer, toast } from 'react-toastify';
export function ListSong() {
    const param = useParams();
    const [listSong, setListSong] = useState([]);
    const [pageNumber, SetPageNumber] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    useEffect(() => {
        handleSearchSong(param.songName)
    }, [param.songName, pageNumber]);
    useEffect(() => {
        handlePageNumber(0);
    }, [param.songName]);
    const handleSearchSong = async (searchKeyWord) => {
        const result = await SongService.searchSong(searchKeyWord, pageNumber);
        setListSong(result?.content);
        setTotalPages(result?.totalPages);
    };
    const handlePageNumber = (pageValue) => {
        SetPageNumber(pageValue);
    };
    const handleWarning = () => {
        toast("Nâng lên Vip để nghe");
    };
    return (
        <div style={{ backgroundColor: '#170f23' }} className="container-fluid">
            <div className="row">
                <SideBar />
                <div className="col-2" />
                <div className="col-10 p-0 m-0">
                    <NavBar />
                    <div className="container-fluid p-5 min-vh-100">
                        <h1 className="display-6 my-5 fw-bold" style={{ color: '#6040ab' }}>Danh sách tìm kiếm</h1>

                        <ul class="list-group list-group-flush mb-3">
                            {
                                listSong?.map(item => (
                                    < li class="list-group-item bg-transparent position-relative">
                                        <img src={item?.image}
                                            style={{ height: "3rem", width: "3rem" }} className="float-start rounded mx-auto d-inline" />
                                        <div className='float-start mx-2'>
                                            {
                                                item.userLimit ?
                                                    window.localStorage.getItem('rate') == 'vip' ?
                                                        <Link to={`/song/${item.id}`}> <div className='text-light text-decoration-underline' style={{ cursor: 'pointer' }}>{item?.name}</div>
                                                        </Link>
                                                        : < div className='text-light text-decoration-underline' onClick={() => handleWarning()} style={{ cursor: 'pointer' }}>{item?.name}</div>

                                                    : <Link to={`/song/${item.id}`}> <div className='text-light text-decoration-underline' style={{ cursor: 'pointer' }}>{item?.name}</div>
                                                    </Link>

                                            }
                                            <div className='text-light-emphasis'>{item?.singerName}</div>
                                        </div>
                                        {
                                            item.userLimit ?
                                                window.localStorage?.getItem('rate') != 'vip' ? (< div className='position-absolute pb-2 bottom-0 end-0'><span class="badge text-bg-danger">Vip</span></div>) : "" : ""
                                        }
                                    </li>
                                ))
                            }
                        </ul>
                        <Pagination totalPages={totalPages} handlePageNumber={handlePageNumber} pageNumber={pageNumber} />
                    </div>
                </div>
            </div>
        </div >
    );
}