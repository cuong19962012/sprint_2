import { BsFillHouseFill, BsList, BsMusicNoteList } from 'react-icons/bs';
import Logo from '../img/Logo.png';
export function SideBar() {
    return (
        <div className="col-2 min-vh-100 position-fixed z-3 text-light px-0" style={{ backgroundColor: '#221b2e' }}>
            <div className="d-flex flex-column gap-5 align-items-start h-100">
                <img className="w-100 m-0 p-0" src={Logo} alt />
                <div className="sidebar btn border-0 w-100 text-light">
                    <div className="h3 float-start" style={{ fontSize: '1.3rem' }}><BsFillHouseFill className='mx-1' />Trang chủ</div>
                </div>
                <div className="btn-group dropend sidebar w-100 text-light">
                    <button className="btn btn-primary bg-transparent border-0" type="button" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        <div className="h3 float-start" style={{ fontSize: '1.3rem' }}><BsList className='mx-1' />Thể loại</div>
                    </button>
                    <ul className="dropdown-menu border-0 bg-opacity-10 bg-black">
                        <li><a href className="dropdown-item text-light" >Nhạc trẻ</a></li>
                        <li><a href className="dropdown-item text-light">Nhạc trẻ</a></li>
                    </ul>
                </div>
                <div className="sidebar btn w-100 border-0 text-light ">
                    <div className="h3 float-start" style={{ fontSize: '1.3rem' }}><BsMusicNoteList className='mx-1' />Tạo album</div>
                </div>
            </div>
        </div>
    );
}