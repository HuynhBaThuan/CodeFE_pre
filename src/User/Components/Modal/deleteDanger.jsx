import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { deleteContact } from '../../services/userServices';

const DeleteConfirmationModal = ({ show, handleClose, id }) => {
    console.log(id)

    const handleDeleteItem = () => {
        // console.log(id)
        deleteContact(id)
        const user = localStorage.getItem("user");
        const userData = JSON.parse(user);
        const contactIndex = userData.contact.findIndex(contact => contact._id === id);
        if (contactIndex !== -1) {
            userData.contact.splice(contactIndex, 1);
        }
        localStorage.setItem("user", JSON.stringify(userData));
        handleClose();
    };
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Cảnh Báo Xóa</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Bạn có chắc chắn muốn xóa mục này?
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Hủy
                </Button>
                <Button variant="danger" onClick={handleDeleteItem}>
                    Xóa
                </Button>
            </Modal.Footer>
        </Modal>
    );
};

export default DeleteConfirmationModal;
