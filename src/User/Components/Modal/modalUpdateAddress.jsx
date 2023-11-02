
import React, { useState, useEffect } from 'react';
import Modal from 'react-bootstrap/Modal';
import { addContact } from '../../services/userServices';

const ModalUpdateAddress = ({ show, handleClose, phoneNumber1, address1, action1 }) => {
    const [error, setError] = useState("");
    const [formData, setFormData] = useState({
        phoneNumber: phoneNumber1, 
        address: address1, 
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        if (/^\d{10}$/.test(formData.phoneNumber)) {
            if(action1  === 'add') {
                addContact(e, formData)
            } else {
                console.log('Update')
            }
        } else {
            setError("Số điện thoại không hợp lệ")
        }

        setFormData({
            phoneNumber: '',
            address: '',
        });
    }

    const handleReset = () => {
        handleClose()
        setFormData({
            phoneNumber: '',
            address: '',
        });
        setError('')
    }
    useEffect(() => {
        setFormData({
            ...formData,
            phoneNumber: phoneNumber1,
            address: address1,
        });
    }, [phoneNumber1, address1]);

    return (
        <Modal className="modal fade modal-change-address" show={show} onHide={handleReset} size="lg">
            <Modal.Body>
                <Modal.Title>Cập nhật địa chỉ</Modal.Title>
                <div class="modal-dialog modal-lg" role="document">
                    <div class="modal-content">
                        <span class="close" data-dismiss="modal">x</span>
                        <form>
                        {error && <div className="alert-danger">{error}</div>}
                            <div class="modal-body">
                                <div class="row">
                                    <div class="col col-6 form-group input-field">
                                        <input
                                            type="text"
                                            class="form-control"
                                            id="fullname"
                                            placeholder="Họ và tên"
                                            name="name"
                                        // value={formData.name}
                                        // onChange={handleChange}
                                        /><label for="name"
                                        >Họ tên<span class="txt-red font-weight-bold"
                                        >*</span></label>
                                    </div>
                                    <div class="col col-6 form-group input-field">
                                        <input
                                            type="text"
                                            class="form-control"
                                            placeholder="Số điện thoại"
                                            name="phoneNumber"
                                            maxLength={10}
                                            value={formData.phoneNumber}
                                            // value={phoneNumber}
                                            onChange={handleChange}
                                        /><label for="phone"
                                        >Số điện thoại<span class="txt-red font-weight-bold"
                                        >*</span></label>
                                    </div>
                                </div>

                                <div class="row">
                                    <div class="col col-12 form-group input-field">
                                        <input
                                            name="address"
                                            placeholder="Số nhà tên đường, phường/xã, quận/huyện, tỉnh/thành phố"
                                            class="form-control"
                                            value={formData.address}
                                            // value={address}
                                            onChange={handleChange}
                                        /><label for="address"
                                        >Địa chỉ chi tiết<span class="txt-red font-weight-bold"
                                        >*</span></label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer content-right">
                                <button
                                    type="button"
                                    class="btn btn-gray text-uppercase"
                                    onClick={handleReset}
                                >
                                    Đóng</button>
                                <button type="button" class="btn btn-red text-uppercase" onClick={(e) => handleSubmit(e)}>
                                    OK
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Modal.Body>
        </Modal>
    )
}
export default ModalUpdateAddress

