import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { createAlbum } from '../services/AlbumService'
export function ModalCreateAlbum({ modalShow, hiddenModal, getAlbumByUsername }) {
    const handleCreateAlbum = async () => {
        const album = {
            name: document.getElementById('album-name').value,
            username: window.localStorage.getItem("username")
        }
        await createAlbum(album);
        await hiddenModal();
        await getAlbumByUsername();
    };
    return (
        <Modal show={modalShow} onHide={() => hiddenModal()} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Thêm album</Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <div className="input-group mb-3">
                    <span className="input-group-text" id="basic-addon1">Tên album</span>
                    <input type="text" className="form-control" id="album-name" aria-describedby="basic-addon1" />
                </div>

            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={() => hiddenModal()}>
                    Quay lại
                </Button>
                <Button variant="primary" onClick={() => handleCreateAlbum()}>
                    Lưu
                </Button>
            </Modal.Footer>
        </Modal>
    );
}