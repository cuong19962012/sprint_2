import { NavBar } from "./NavBar";
import { SideBar } from "./SideBar";
import { BsMusicNoteBeamed } from 'react-icons/bs';
import { ModalCreateAlbum } from "./ModalCreateAlbum";
import { ModalEditAlbum } from "./ModalEditAlbum";
import { ModalRemoveAlbum } from "./ModalRemoveAlbum";
import { useEffect, useState } from "react";
import * as AlbumService from '../services/AlbumService';
import { Link } from "react-router-dom";

export function AlbumList() {
    const [listAlbum, setListAlbum] = useState([]);
    const [modalCreateShow, setModalCreateShow] = useState(false);
    const [modalEditShow, setModalEditShow] = useState(false);
    const [modalRemoveShow, setModalRemoveShow] = useState(false);
    const [albumEdit, setAlbumEdit] = useState({});
    const [albumRemove, setAlbumRemove] = useState({});
    useEffect(() => {
        getAlbumByUsername();
    }, []);
    const showModalCreate = () => {
        setModalCreateShow(true);
    };
    const hiddenModalCreate = () => {
        setModalCreateShow(false);
    };
    const showModalEdit = (album) => {
        setModalEditShow(true);
        setAlbumEdit(album);
    };
    const hiddenModalEdit = () => {
        setModalEditShow(false);
    };
    const showModalRemove = (album) => {
        setModalRemoveShow(true);
        setAlbumRemove(album);
    };
    const hiddenModalRemove = () => {
        setModalRemoveShow(false);
    };
    const getAlbumByUsername = async () => {
        const result = await AlbumService.getAllAlbumByUsername(window.localStorage.getItem("username"));
        setListAlbum(result);
    };
    return (
        <>
            <div className="container-fluid overflow-hidden" style={{ backgroundColor: '#170f23' }}>
                <div className="row">
                    <SideBar />
                    <div className="col-2" style={{ backgroundColor: '#170f23' }} />
                    <div className="col-10 p-0 m-0 min-vh-100 ">
                        <NavBar />
                        <div className="container-fluid p-5 h-100" >
                            <div className="card mt-4 " style={{ backgroundColor: '#221b2e' }}>
                                <div className="card-header text-light h3">
                                    <div className="float-start">Danh sách album</div>
                                    <div className="float-end" > <button className="btn btn-primary" onClick={() => showModalCreate()}> Thêm album</button></div>
                                </div>
                                <div className="card-body">
                                    <ul class="list-group list-group-flush">

                                        {
                                            listAlbum.map(item => (
                                                <li class="list-group-item bg-transparent position-relative">
                                                    <div className="float-start mx-2">
                                                        <Link to={`/album/${item.id}`}> <div className='text-light text-decoration-underline btn p-0'>{item.name}</div></Link>
                                                        <div className='text-light-emphasis '>{item.quantity} Bài hát<BsMusicNoteBeamed /></div>
                                                    </div>
                                                    <div className="position-absolute end-0 bottom-0 pb-3">
                                                        <button className="btn btn-primary mx-3" onClick={() => showModalEdit(item)}>Sửa tên</button>
                                                        <button className="btn btn-primary" onClick={() => showModalRemove(item)}>Xóa</button>
                                                    </div>
                                                </li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <ModalCreateAlbum getAlbumByUsername={getAlbumByUsername} hiddenModal={hiddenModalCreate} modalShow={modalCreateShow} />
                        <ModalEditAlbum albumEdit={albumEdit} getAlbumByUsername={getAlbumByUsername} hiddenModal={hiddenModalEdit} modalShow={modalEditShow} />
                        <ModalRemoveAlbum albumRemove={albumRemove} getAlbumByUsername={getAlbumByUsername} hiddenModal={hiddenModalRemove} modalShow={modalRemoveShow} />
                    </div>
                </div>
            </div>
        </>
    );
} 