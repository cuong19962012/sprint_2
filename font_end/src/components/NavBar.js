import Account from '../img/account.png';
import { FaSearch } from 'react-icons/fa';
export function NavBar() {
    return (
        <nav className="navbar sticky-top" style={{ backgroundColor: '#170f23' }}>
            <div className="row w-100">
                <div className="col-10">
                    <div className="position-relative d-flex w-75 float-end">
                        <FaSearch className='position-absolute ' style={{ color: '#6040ab', top: 10, left: 10 }} />
                        <input type="search" id="gsearch" name="gsearch" maxLength={85} className="form-control w-100" style={{ textIndent: 25 }} placeholder="Tìm tên bài hát" />
                    </div>
                </div>
                <div className="col-2 rounded-circle position-relative">
                    <img className="float-end position-relative" style={{ width: '2rem', height: '2rem', top: '20%' }} src={Account} />
                </div>
            </div>
        </nav>
    );
}