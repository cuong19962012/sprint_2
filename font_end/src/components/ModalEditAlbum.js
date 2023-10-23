import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editAlbum } from '../services/AlbumService'
export function ModalEditAlbum({ modalShow, hiddenModal, albumEdit, getAlbumByUsername }) {

    const handleEditAlbum = async () => {
        const album = {
            id: albumEdit.id,
            name: document.getElementById('album-name').value,
            username: window.localStorage.getItem("username")
        }
        await editAlbum(album);
        await hiddenModal();
        await getAlbumByUsername();
    };
    return (
        <Modal show={modalShow} onHide={() => hiddenModal()} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Sửa album</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Tên album</span>
                    <input type="text" defaultValue={albumEdit.name} className="form-control" id="album-name" aria-describedby="basic-addon1" />
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => hiddenModal()}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleEditAlbum()}>
                    Lưu
                </Button>
            </Modal.Footer>
        </Modal>
    );
}