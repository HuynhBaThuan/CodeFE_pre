import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function YourComponent({ error, message, setOpenNotify }) {
    const [showModal, setShowModal] = useState(true);

    const handleShowModal = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setOpenNotify(false);
    };

    return (
        <div>

            <Modal show={true} onHide={handleCloseModal} animation={false}>
                <Modal.Header closeButton>
                    <Modal.Title>{error}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{message}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Đóng
                    </Button>
                    <Button variant="primary" onClick={handleCloseModal}>
                        Lưu thay đổi
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default YourComponent;
