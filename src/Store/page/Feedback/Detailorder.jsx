import React, { useState, useEffect } from 'react';
import { Box } from "@mui/material";
import Header1 from "../../components/Header/Header1";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import Image from "../../components/Image/Image";
import * as yup from 'yup';
import { Formik } from 'formik';
import { getAllCategory } from '../../services/StoreApi';
import style from './Detailorder.module.css';

const Product = () => {
    const [images, setImages] = useState([]);
    const [deletedImageUrls, setDeletedImageUrls] = useState([]);
    const [message, setMessage] = useState("");
    const [validated, setValidated] = useState(false);
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const [Catname, setCatname] = useState([]);
    const fetchCatname = async () => {
        try {
            const response = await axios.get(
                'https://falth-api.vercel.app/api/category',
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            const responseData = response.data;
            console.log(responseData);
            setCatname(responseData);
        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        fetchCatname();
    }, []);
    const Addproduct = async (formData) => {
        try {
            await axios.post(`https://falth-api.vercel.app/api/product/owner/${_id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });

        } catch (error) {
        }
    };
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;
    const schema = yup.object().shape({
        name: yup.string().required("Tên là bắt buộc"),
        price: yup.string().required("Giá tiền là bắt buộc").matches(phoneRegExp, "Giá tiền không hợp lệ"),
        description: yup.string().required("Mô tả là bắt buộc"),
    });

    const handleSubmit = (values) => {
        console.log('Dữ liệu đã submit:', values);
        const tenSanPham = values.name;
        const giaTien = values.price;
        const moTa = values.description;
        const danhMuc = values.catName;

        formData.append('catName', danhMuc);
        formData.append('name', tenSanPham);
        formData.append('price', giaTien);
        formData.append('description', moTa);
        console.log(images)
        if (images.length === 0) {
            setMessage("Bạn cần chọn ít nhất một hình ảnh.");
        } else {
            images.forEach((image, i) =>
                formData.append('images', image.file)
            );
            Addproduct(formData);
        }
    };
    let formData = new FormData();

    return (
        <Box m="20px 100px">
            <Header1 title={"Thống kê"} />
            <Box
                display="grid"
                gridTemplateColumns="repeat(6, 1fr)"
                gridAutoRows="5vh"
                gap="20px"
                mt="30px"
            >
                <Box
                    gridColumn="span 4"
                    display="flex"
                    gridRow="span 10"
                >
                    <div style={{ width: "100%", height: "100%", padding: "20px", gap: "40px", border: " 0.1px solid rgb(223, 223, 223)", borderRadius: "10px" }}>
                        <h5>Sản phẩm</h5>
                        <div>
                            <div>
                                <div className={style.producttop} >
                                    <div className={style.img}>
                                        <img src={images} alt="" />
                                    </div>

                                    <div className={style.name}>
                                        <span>product</span>
                                    </div>
                                    <div className={style.price}>
                                        <span>price đ</span>
                                    </div>
                                    <div className={style.sold}>
                                        <span>count sản phẩm</span>
                                    </div>
                                </div>

                            </div>
                            <div>
                                <div className={style.producttop} >
                                    <div className={style.img}>
                                        <img src={images} alt="" />
                                    </div>

                                    <div className={style.name}>
                                        <span>product</span>
                                    </div>
                                    <div className={style.price}>
                                        <span>price đ</span>
                                    </div>
                                    <div className={style.sold}>
                                        <span>count sản phẩm</span>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </Box>
                <Box
                    gridColumn="span 2"
                    gridRow="span 3"
                    display="flex"
                >
                    <div style={{
                        width: "100%", padding: "20px", border: " 0.1px solid rgb(223, 223, 223)", borderRadius: "10px"
                    }}>
                        <h5>Note</h5>
                    </div>

                </Box>
                <Box
                    gridColumn="span 2"
                    gridRow="span 7"
                    display="flex"

                >
                    <div style={{
                        width: "100%",
                        padding: "20px",
                        border: "0.1px solid rgb(223, 223, 223)",
                        borderRadius: "10px"
                    }}> <h5>Khách hàng</h5>
                        <div className={style.infocustumer}>
                            <h6>CONTACT INFORMATION</h6>
                            <span>
                                moizabdul320@gmail.com
                            </span>
                            <span>
                                03169089872
                            </span>

                        </div>
                        <div className={style.infocustumer}>
                            <h6>SHIPPING ADDRESS</h6>
                            <span>Streat no 7 zostel hostel in hostel city</span>
                            <span>Streat no 7 zostel hostel in hostel city</span>

                        </div>
                        <div className={style.infocustumer}>
                            <h6>0776230217</h6>

                        </div>

                    </div>
                </Box>

            </Box>
        </Box >
    );
};

export default Product;
