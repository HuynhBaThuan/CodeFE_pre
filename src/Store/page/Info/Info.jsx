import React, { useState, useRef, useEffect } from 'react';
import style from './Info.css'
import axios from 'axios';
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import * as yup from "yup";
import { Form } from "formik";
import Loading from '../../components/Loading/Loading'


const UserProfile = () => {

    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [openingHours, setOpeningHours] = useState('');
    const [closingHours, setClosingHours] = useState('');
    const [password, setPassword] = useState('');
    const [newpassword, setnewPassword] = useState('');
    const [isPasswordChangeVisible, setPasswordChangeVisible] = useState(false);
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [imgLink, setimgLink] = useState("");
    const [img, setimg] = useState(null);
    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const checkoutSchema = yup.object().shape({
        name: yup.string().required("Tên là bắt buộc"),
        address: yup.string().required("Địa chỉ là bắt buộc"),
        phoneNumber: yup.string().matches(phoneRegExp, "Số điện thoại không hợp lệ"),
        openingHours: yup.string().required("Giờ mở cửa là bắt buộc"),
        closingHours: yup.string().required("Giờ đóng cửa là bắt buộc"),
    });

    const handleSubmit = (event) => {
        event.preventDefault();

        checkoutSchema.validate({
            name, address, phoneNumber, openingHours, closingHours
        })
            .then(valid => {

                const json = {
                    "image": img,
                    "name": name,
                    "address": address,
                    "phoneNumber": phoneNumber,
                    "openAt": openingHours,
                    "closeAt": closingHours,
                    "description": description,
                }
                UpdateStore(json);
            })
            .catch(errors => {
                console.log(errors);
            });
    };


    const getdatainfostore = async (json) => {
        try {
            const response = await axios.get(`https://falth.vercel.app/api/store/${_id}`, json
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            const responseData = response.data.data;
            setData(responseData);
        } catch (error) {
            console.log(error);
        }
        finally {
            setTimeout(() => { setIsLoading(false) }, 3000)

        }

    }

    const setInfostore = async () => {
        setimgLink(data.image);
        setName(data.name);
        setAddress(data.address);
        setClosingHours(data.closeAt);
        setOpeningHours(data.openAt);
        setPhoneNumber(data.phoneNumber);
        setDiscription(data.discription);
    }
    const [description, setDiscription] = useState("");
    useEffect(() => {
        getdatainfostore();

    }, []);
    useEffect(() => {
        setInfostore();
    }, [data]);



    const UpdateStore = async (json) => {
        try {
            const response = await axios.put(`https://falth.vercel.app/api/store/${_id}`, json
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                }
            );
            setIsLoading(true);
        } catch (error) {
            console.log(error);
        }
        finally {
            setTimeout(() => { setIsLoading(false) }, 3000)

        }
    };



    const togglePasswordChange = () => {
        setPasswordChangeVisible(!isPasswordChangeVisible);
    };
    const handleNewPasswordChange = (event) => {
        setnewPassword(event.target.value);
    };

    const handleNameChange = (event) => {
        setName(event.target.value);
    };

    const handleAddressChange = (event) => {
        setAddress(event.target.value);
    };

    const handlePhoneNumberChange = (event) => {
        setPhoneNumber(event.target.value);
    };

    const handleOpeningHoursChange = (event) => {
        setOpeningHours(event.target.value);
    };

    const handleClosingHoursChange = (event) => {
        setClosingHours(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const handleSubmit12 = (event) => {
        event.preventDefault();
        const json = {
            "image": img,
            "name": name,
            "address": address,
            "phoneNumber": phoneNumber,
            "openAt": openingHours,
            "closeAt": closingHours,
            "description": description,
        }
        console.log(json)
        UpdateStore(json);
    };

    return (
        <Box width="90%" sx={{ m: '0 5%', }}>
            <div className="now-detail-profile" style={{
                borderRadius: "4px",
                boxShadow: " 0 0 3px 0 rgba(50,50,50,.3)"
            }} >
                <div style={{
                    fontSize: "18px",
                    fontWeight: 700,
                    padding: "16px 15px",
                    borderBottom: "1px solid #ebebeb",
                    position: "relative",
                    verticalAlign: "middle",
                }}>
                    Thông tin cửa hàng
                </div>{isLoading ? (
                    <div style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        width: "100%",
                        height: "50vh",
                    }}>
                        <Loading />
                    </div>

                ) : (
                    <div className="content-user-profile">
                        <div className="user-profile-update">
                            <div className="title-user">Tải ảnh đại diện</div>
                            <div className="row">
                                <div className="col-3">
                                    <div className="user-avatar-image">
                                        <img className="user-avatar-image" src={imgLink} alt="Avatar" id="avatar_user" />
                                    </div>
                                </div>
                                <div className="col-9">
                                    <div className="form-group">
                                        <span>Tải lên từ</span>
                                        <div className="custom-file-image">
                                            <input type="file" id="validatedCustomFile" className="input-custom" required="" hidden accept="image/*"
                                                onChange={({ target: { files } }) => {
                                                    if (files) {
                                                        setimg((files[0]))
                                                        setimgLink(URL.createObjectURL(files[0]))
                                                    }
                                                }} />
                                            <label className="label-custom" htmlFor="validatedCustomFile">Chọn</label>
                                            <span className="font-italic font13">Chấp nhận GIF, JPEG, PNG, BMP với kích thước tối đa 5.0 MB</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="user-profile-update">
                            <form >
                                <div className="title-user">Thay đổi thông tin</div>
                                <div className="form-group">
                                    <div className="col-3">Tên quán</div>
                                    <div className="col-4">
                                        <div className="input-group">
                                            <input
                                                name="name"
                                                placeholder="Tên"
                                                type="text"
                                                className="form-control"
                                                value={name}
                                                onChange={handleNameChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-3">Địa chỉ</div>
                                    <div className="col-4">
                                        <div className="input-group">
                                            <input
                                                name="address"
                                                placeholder="Địa chỉ"
                                                type="text"
                                                className="form-control"
                                                value={address}
                                                onChange={handleAddressChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-3">Số điện thoại</div>
                                    <div className="col-4">
                                        <div className="input-group">
                                            <input
                                                name="phoneNumber"
                                                placeholder="Số điện thoại"
                                                type="text"
                                                className="form-control"
                                                value={phoneNumber}
                                                onChange={handlePhoneNumberChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-3">Giờ mở cửa</div>
                                    <div className="col-4">
                                        <div className="input-group">
                                            <input
                                                name="openingHours"
                                                placeholder="Giờ mở cửa"
                                                type="time"
                                                className="form-control"
                                                value={openingHours}
                                                onChange={handleOpeningHoursChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="form-group">
                                    <div className="col-3">Giờ đóng cửa</div>
                                    <div className="col-4">
                                        <div className="input-group">
                                            <input
                                                name="closingHours"
                                                placeholder="Giờ đóng cửa"
                                                type="time"
                                                className="form-control"
                                                value={closingHours}
                                                onChange={handleClosingHoursChange}
                                            />
                                        </div>
                                    </div>
                                </div>
                                {isPasswordChangeVisible ? (
                                    <>
                                        <div className="form-group">
                                            <div className="col-3">Mật khẩu cũ</div>
                                            <div className="col-4">
                                                <div className="input-group">
                                                    <input
                                                        name="oldPassword"
                                                        placeholder="Mật khẩu cũ"
                                                        type="password"
                                                        className="form-control"
                                                        value={password}
                                                        onChange={handlePasswordChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="form-group">
                                            <div className="col-3">Mật khẩu mới</div>
                                            <div className="col-4">
                                                <div className="input-group">
                                                    <input
                                                        name="newPassword"
                                                        placeholder="Mật khẩu mới"
                                                        type="password"
                                                        className="form-control"
                                                        value={newpassword}
                                                        onChange={handleNewPasswordChange}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <>
                                        <div className="form-group">
                                            <div className="col-3">Mật khẩu</div>
                                            <div className="col-8">
                                                <div className="input-group">
                                                    <span className="show-pass">********</span>
                                                    <button type="button" className="change-pass" onClick={togglePasswordChange}>
                                                        Đổi mật khẩu
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </>
                                )}
                                <div className="row">
                                    <div className="col-3">
                                        <button onClick={handleSubmit} className="btn btn-blue-4 btn-block">Lưu thay đổi</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                )}
            </div>
        </Box >

    );
};

export default UserProfile;
