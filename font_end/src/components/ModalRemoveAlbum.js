import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { removeAlbum } from '../services/AlbumService'
export function ModalRemoveAlbum({ albumRemove, getAlbumByUsername, modalShow, hiddenModal }) {
    const handleEditAlbum = async () => {
        await removeAlbum(albumRemove.id);
        await hiddenModal();
        await getAlbumByUsername();
    };
    return (
        <Modal show={modalShow} onHide={() => hiddenModal()} animation={true}>
            <Modal.Header closeButton>
                <Modal.Title>Xóa album</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className='h6'>Bạn có chắn chắc muốn xóa album : <p className='text-danger d-inline'>{albumRemove.name}</p> ?</div>
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