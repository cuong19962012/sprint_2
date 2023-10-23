import { BsFillHouseFill, BsList, BsMusicNoteList } from 'react-icons/bs';
import Logo from '../img/Logo.png';
import '../style/style.css';
import * as TypeService from '../services/TypeService';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export function SideBar() {
    const [listType, setListType] = useState([]);
    useEffect(() => {
        getListType()
    }, []);
    const getListType = async () => {
        const result = await TypeService.getAllType();
        setListType(result);
    };
    return (
        <div className="col-2 min-vh-100 overflow-hidden position-fixed z-3 text-light px-0" style={{ backgroundColor: '#221b2e' }}>
            <div className="d-flex flex-column gap-5 align-items-start h-100">
                <img className="w-100 m-0 p-0" src={Logo} alt />
                <Link to={"/"} className=' w-100'>
                    <div className=" btn border-0 sidebar w-100 text-light">
                        <div className="h3 float-start" style={{ fontSize: '1.3rem' }}><BsFillHouseFill className='mx-1' />Trang chủ</div>
                    </div>
                </Link>
                <div className="btn-group dropend sidebar w-100 text-light" style={{ zIndex: "1000000" }}>
                    <button className="btn btn-primary bg-transparent border-0" type="button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="h3 float-start" style={{ fontSize: '1.3rem' }}><BsList className='mx-1' />Thể loại</div>
                    </button>
                    <ul className="dropdown-menu border-0 bg-opacity-10 bg-black z-3" >

                        {
                            listType?.map(item => (
                                <li key={item?.id} className='z-3'><a href className="dropdown-item text-light sidebar btn z-3"  >{item?.name}</a></li>
                            ))
                        }


                    </ul>
                </div>
                <Link to={"/album"} className=' w-100'>
                    <div className="sidebar btn w-100 border-0 text-light ">
                        <div className="h3 float-start" style={{ fontSize: '1.3rem' }}><BsMusicNoteList className='mx-1' />Album của tôi</div>
                    </div>
                </Link>
            </div>
        </div>
    );
}