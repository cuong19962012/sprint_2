import { useState } from 'react';
import Account from '../img/account.png';
import { BsSearch, BsMusicNote, BsPersonLinesFill, BsPersonBoundingBox, BsDoorOpen } from 'react-icons/bs';
import { useEffect } from 'react';
import * as SongService from '../services/SongService';
import * as AuthorService from '../services/AuthorService';
import { Link, NavLink, useNavigate } from 'react-router-dom';
export function NavBar({ handleSearchKeyWord, handlePageNumber }) {
    const [searchBox, setSearchBox] = useState(false);
    const [listSongBySearch, setListSongBySearch] = useState([]);
    const navigate = useNavigate();
    const [userApp, setUserApp] = useState({
        username: "",
        image: ""
    });
    const [listAuthorBySearch, setListAuthorBySearch] = useState([]);
    useEffect(() => {
        setUserApp(
            {
                username: window.localStorage.getItem("username"),
                image: window.localStorage.getItem("image")
            }
        );

    }, [userApp.username]);
    const getListSongBySearch = async (searchKeyWord) => {
        const result = await SongService.getListSongBySearch(searchKeyWord);
        setListSongBySearch(result);
    };
    const getListAuthorBySearch = async (searchKeyWord) => {
        const result = await AuthorService.getListAuthorBySearch(searchKeyWord);
        setListAuthorBySearch(result);
    };
    const showSearchBox = async (event) => {
        await getListSongBySearch(event.target.value);
        await getListAuthorBySearch(event.target.value);
        setSearchBox(true);
    };
    const hiddenSearchBox = () => {
        setTimeout(()=>setSearchBox(false),300);
    };
    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && event.target.value !== "") {
            handleSearchKeyWord(event.target.value);
            handlePageNumber(0);
        }
    };
    const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
        localStorage.removeItem("image");
        setUserApp({
            username: "",
            image: ""
        });
    }
    const handleNavigateBySong = (songId) => {
        navigate(`/song/${songId}`);
    };
    return (
        <nav className="navbar sticky-top" style={{ backgroundColor: '#170f23' }}>
            <div className="row w-100">
                <div className="col-10">
                    <div className="position-relative d-flex w-75 float-end">
                        <BsSearch className='position-absolute ' style={{ color: '#6040ab', top: 10, left: 10 }} />
                        <input type="search" id="gsearch" onBlur={() => hiddenSearchBox()} onKeyDown={event => handleKeyPress(event)} onInput={(event) => showSearchBox(event)} name="gsearch" maxLength={85}
                            className="form-control w-100 border-0" style={{ textIndent: 25 }} placeholder="Tìm tên bài hát" />
                        {searchBox ?
                            <div className='bg-light w-100 position-absolute d-block rounded-2 p-3 overflow-y-auto'
                                style={{ height: '16rem', bottom: "-16.5rem" }}>
                                <div>
                                    <div className='h6'>
                                        Bài Hát
                                    </div>

                                    {
                                        listSongBySearch?.map(item => (
                                            <div onClick={()=>handleNavigateBySong(item.id)} style={{ cursor: 'pointer' }} className='itemSearchBox rounded '>
                                                <BsMusicNote />{item.name}
                                            </div>
                                        ))
                                    }
                                </div>
                                <div className='py-2'>
                                    <div className='h6'>
                                        Ca sĩ
                                    </div>

                                    {
                                        listAuthorBySearch?.map(item => (
                                            <div className='itemSearchBox rounded'>
                                                <BsPersonLinesFill /> {item.name}
                                            </div>
                                        ))
                                    }

                                </div>
                            </div>

                            : ""
                        }

                    </div>
                </div>
                <div className="col-2 rounded-circle position-relative">
                    {
                        userApp.username !== null ?
                            <>
                                <div className='btn border-0 float-end dropdown' data-bs-toggle='dropdown' aria-expanded='false'>
                                    <img className=" object-fit-cover rounded-circle" style={{ width: '2rem', height: '2rem', top: '20%' }} src={userApp.image} />
                                </div>
                                <ul className="dropdown-menu" style={{ backgroundColor: "#221b2e" }}>
                                    <li className='fw-bold text-center text-light fs-6'>{userApp.username}</li>
                                    <li><hr className="dropdown-divider " /></li>
                                    <li className='text-light mb-2 btn user-item w-100'><BsPersonBoundingBox /> Sửa ảnh đại diện</li>
                                    <li onClick={() => handleLogout()} className='text-light btn user-item w-100'><BsDoorOpen /> Đăng xuất</li>
                                </ul>

                            </>
                            : <div className='text-light float-end position-relative btn'>
                                <NavLink style={{ textDecoration: 'none' }} to={"/login"}>Đăng nhập</NavLink>
                            </div>
                    }
                </div>
            </div>
        </nav>
    );
}