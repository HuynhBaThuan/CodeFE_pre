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
import Loading from '../../components/Loading/Loading'
import style from './Formadd.module.css';


const Product = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [images, setImages] = useState([]);
    const [deletedImageUrls, setDeletedImageUrls] = useState([]);
    const [message, setMessage] = useState("");
    const [validated, setValidated] = useState(false);
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
            setIsLoading(false);
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
        let formData = new FormData();
        const tenSanPham = values.name;
        const giaTien = values.price;
        const moTa = values.description;
        const danhMuc = values.category;

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


    return (
        <Box m="20px 100px">
            <Header1 title={"Thêm sản phẩm"} />
            {isLoading ? (
                <div className={style.isloading}><Loading /></div>
            ) : (
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
                        <Formik
                            validationSchema={schema}
                            noValidate validated={validated}
                            onSubmit={handleSubmit}
                            initialValues={{
                                name: "",
                                price: "",
                                description: "",
                                category: ""

                            }}
                        >
                            {({ handleSubmit, handleChange, values, touched, errors }) => (
                                <Form noValidate onSubmit={handleSubmit} style={{ width: "100%", height: "100%" }}>
                                    <h5 style={{ paddingBottom: "20px" }}>Trạng thái</h5>
                                    <Row className="mb-3" style={{ marginTop: "30px" }}>
                                        <Form.Group as={Col} md="6" controlId="validationCustom01">
                                            <Form.Label>Tên sản phẩm</Form.Label>
                                            <Form.Control
                                                required
                                                type="text"
                                                placeholder=""
                                                defaultValue=""
                                                name="name"
                                                value={values.name}
                                                onChange={handleChange}
                                                isInvalid={!!errors.name}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.name}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                        <Form.Group as={Col} md="6" controlId="validationCustomUsername">
                                            <Form.Label>Giá tiền</Form.Label>
                                            <InputGroup hasValidation>

                                                <Form.Control
                                                    type="text"
                                                    placeholder=""
                                                    aria-describedby="inputGroupPrepend"
                                                    required
                                                    name="price"
                                                    value={values.price}
                                                    onChange={handleChange}
                                                    isInvalid={!!errors.price}
                                                />
                                                <InputGroup.Text id="inputGroupPrepend">VND</InputGroup.Text>
                                                <Form.Control.Feedback type="invalid">
                                                    {errors.price}
                                                </Form.Control.Feedback>
                                            </InputGroup>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3" style={{ marginTop: "30px" }}>
                                        <Form.Group
                                            as={Col}
                                            md="12"
                                            controlId="validationFormik103"
                                            className="position-relative"
                                        >
                                            <Form.Label>Mô tả</Form.Label>
                                            <Form.Control
                                                required
                                                as="textarea"
                                                placeholder="Mô tả"
                                                name="description"
                                                value={values.description}
                                                onChange={handleChange}
                                                isInvalid={!!errors.description}
                                            />
                                            <Form.Control.Feedback type="invalid">
                                                {errors.description}
                                            </Form.Control.Feedback>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3" style={{ marginTop: "30px" }}>
                                        <Form.Group
                                            as={Col}
                                            md="12"
                                            controlId="validationFormik103"
                                            className="position-relative"
                                            justifyContent="bottom"
                                        >
                                            <Form.Label>Danh mục</Form.Label>
                                            <Form.Select
                                                name="category"
                                                value={values.category}
                                                onChange={(e) => {
                                                    handleChange(e);
                                                    values.category = e.target.value;
                                                }}
                                            >
                                                {Catname.map((option, index) => (
                                                    <option key={index} value={option.catName}>
                                                        {option.catName}
                                                    </option>
                                                ))}
                                            </Form.Select>
                                        </Form.Group>
                                    </Row>
                                    <Row className="mb-3" style={{ marginTop: "30px" }}>
                                        <Form.Group
                                            as={Col}
                                            md="12"
                                            controlId="validationFormik103"
                                            className="position-relative"
                                            justifyContent="bottom"
                                        >
                                            <Button type="submit" >Submit form</Button>
                                        </Form.Group>
                                    </Row>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </Box>
                {/* //////////////////////////////////////////////////////////////////// */}
                <Box
                    gridColumn="span 2"
                    gridRow="span 7"
                    display="flex"
                >
                    <div style={{
                        width: "100%", padding: "20px", border: " 0.1px solid rgb(223, 223, 223)", borderRadius: "10px"
                    }}>
                        <h5 style={{ marginBottom: "20px" }}>Hình ảnh</h5>
                        <Image images={images} setImages={setImages} setDeletedImageUrls={setDeletedImageUrls} />
                        <h6 style={{ paddingBottom: "20px", color: "red" }}>{message}</h6>
                    </div>

                </Box>
                <Box
                    gridColumn="span 2"
                    gridRow="span 3"
                    display="flex"

                >
                    <div style={{
                        width: "100%",
                        padding: "20px",
                        border: "0.1px solid rgb(223, 223, 223)",
                        borderRadius: "10px"
                    }}>
                        <h5 style={{ paddingBottom: "20px" }}>Trạng thái</h5>
                        <div>
                            <div className="mb-3">
                                <Form.Check
                                    type="radio"
                                    id="default-radio-1"
                                    label="Cón hàng"
                                    name="default-radio"
                                    defaultChecked // Tự động chọn vị trí 1 khi trang được tải
                                />
                                <Form.Check
                                    type="radio"
                                    id="default-radio-2"
                                    label="Hết hàng"
                                    name="default-radio"
                                />
                            </div>
                        </div>

                    </div>
                </Box>

            </Box>)}
        </Box >
    );
};

export default Product;
