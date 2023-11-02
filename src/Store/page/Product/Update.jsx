import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import Header from "../../components/Header/Header";
import * as yup from "yup";
import { Formik, Form } from "formik";
import { Button, TextField, Select, MenuItem } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import axios from 'axios';
import NativeSelect from '@mui/material/NativeSelect';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Sdata from '../../components/Sdata';
import { withEmotionCache } from '@emotion/react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImageCarousel = ({ images }) => {
    return (
        <Carousel showStatus={false} showThumbs={false} infiniteLoop={true} showIndicators={false} width="200px">
            {
                images.map((image, index) => (
                    <div key={index}>
                        <img style={{
                            cursor: "pointer",
                            borderRadius: "50%",
                            width: "100px",
                            height: "100px"
                        }} src={image} alt={`Image ${index}`} />
                    </div>
                ))
            }
            < div >
                <img style={{
                    cursor: "pointer",
                    borderRadius: "50%",
                    width: "100px",
                    height: "100px"
                }}
                    src="./avata.jpg" alt={`Image`} />
            </div >
        </Carousel >
    );
};



function Update({ data, selectedRow,setOpenEdit, fetchData, setError, setMessage, setOpenNotify }) {

    const [imgLink, setimgLink] = useState(selectedRow.images[0]);
    const [img, setimg] = useState(null);
    const [name, setname] = useState(selectedRow.name);
    const [price, setprice] = useState(selectedRow.price);
    const [des, setdes] = useState(selectedRow.description);
    const [isLoading, setIsLoading] = useState(true);
    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const [category, setCategory] = useState(selectedRow.category.catName);
    const [selectActive, setSelectActive] = useState(false);
    const api = `https://falth.vercel.app/api/product/store/${_id}?limit=100`;
    const isNonMobile = useMediaQuery("(min-width:600px)");
    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const checkoutSchema = yup.object().shape({
        name: yup.string().required("Tên là bắt buộc"),
        price: yup.string().required("Giá tiền là bắt buộc").matches(phoneRegExp, "Giá tiền không hợp lệ"),
        description: yup.string().required("Mô tả là bắt buộc"),
    });
    const Updateproduct = (values) => {
        const tenSanPham = name;
        const giaTien = price;
        const moTa = des;
        const danhMuc = category;
        const images = img

        checkoutSchema.validate({
            name: tenSanPham,
            price: giaTien,
            description: moTa,
            name: danhMuc,
        })
            .then(valid => {
                let formData = new FormData();
                formData.append('catName', danhMuc);
                formData.append('name', tenSanPham);
                formData.append('images', img);
                formData.append('price', giaTien);
                formData.append('description', moTa);

                Update(formData);
            })
            .catch(errors => {
                console.log(errors);
                setError(false);
                setMessage(errors);
                setOpenNotify(true);
            });
    };
    const Update = async (json) => {
        try {
            await axios.put(`https://falth.vercel.app/api/product/${selectedRow._id}`, json, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setError(true);
            setMessage("Thêm thành công");
            setOpenEdit(false);

            setOpenNotify(true);

        } catch (error) {
            setError(false);
            setMessage(error.message);
            setOpenNotify(true);
        }
    };
    const initialValues = {
        name: "",
        price: "",
        description: "",
        contact: "",
    };

    const formRef = useRef();
    const onSub = (values) => {


    }
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target) && !selectActive) {
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
        setimgLink(selectedRow.images);
    }, [selectActive]);
    return (
        <div>
            <div>
                <Box>
                    <div>
                        <Header title={`Chi tiết sản phẩm: ${selectedRow.name}`} subtitle={`ID: ${selectedRow.id}`} />
                        <Formik
                            initialValues={initialValues}
                            validationSchema={checkoutSchema}
                        >
                            {({
                                values,
                                errors,
                                touched,
                                handleBlur,
                                handleChange,
                            }) => (
                                <Form ref={formRef}>
                                    <Box
                                        display="grid"
                                        gap="30px"
                                        gridTemplateColumns="repeat(4, minmax(0, 1fr)"
                                        sx={{
                                            "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
                                        }}
                                    >
                                        <Box display="flex" justifyContent="center" alignItems="center" sx={{ gridColumn: "span 4" }}>
                                            <Box>
                                                <img
                                                    src={imgLink}
                                                    style={{
                                                        cursor: "pointer",
                                                        borderRadius: "50%",
                                                        width: "100px",
                                                        height: "100px"
                                                    }}
                                                    onClick={() => document.querySelector('.input-field').click()}
                                                />
                                                <input type="file" accept='image/*' hidden className='input-field'
                                                    onChange={({ target: { files } }) => {
                                                        if (files) {
                                                            setimg((files[0]))
                                                            setimgLink(URL.createObjectURL(files[0]))
                                                        }
                                                    }} />
                                            </Box>
                                            {/* <ImageCarousel images={selectedRow.images} /> */}

                                        </Box>
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Tên sản phẩm"
                                            value={name}
                                            onBlur={handleBlur}
                                            onChange={(e) => setname(e.target.value)}
                                            name="name"
                                            sx={{ gridColumn: "span 2" }}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Giá tiền"
                                            value={price}
                                            onBlur={handleBlur}
                                            onChange={(e) => setprice(e.target.value)}
                                            name="price"
                                            sx={{ gridColumn: "span 2" }}
                                        />
                                        <TextField
                                            fullWidth
                                            variant="filled"
                                            type="text"
                                            label="Mô tả"
                                            value={des}
                                            onBlur={handleBlur}
                                            onChange={(e) => setdes(e.target.value)}
                                            name="description"
                                            sx={{ gridColumn: "span 4" }}
                                        />


                                        <NativeSelect
                                            sx={{ gridColumn: "span 4" }}
                                            name="category"
                                            value={category}
                                            onChange={(e) => setCategory(e.target.value)}
                                        >
                                            {data.map((option, index) => {
                                                return (
                                                    <option value={option.catName}>{option.catName}</option>
                                                );
                                            })}
                                        </NativeSelect>

                                    </Box>
                                    <Box display="flex" justifyContent="end" mt="20px">
                                        <Button type='submit' onClick={(values) => Updateproduct(values)} color="secondary" variant="contained">
                                            Cập nhật
                                        </Button>
                                    </Box>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Box>
            </div>
        </div>
    )
}

export default Update
