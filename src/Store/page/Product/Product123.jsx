import React, { useState, useRef, useEffect } from 'react';
import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from '@mui/x-data-grid';
import { tokens } from "../../theme";
import Header from "../../compenents/Header/Header";
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

const Product = () => {

    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const [data, setData] = useState([]);
    const [Catname, setCatname] = useState([]);
    const [category, setCategory] = useState("");

    const [name, setname] = useState("");
    const [price, setprice] = useState("");
    const [dis, setdis] = useState("");





    const isNonMobile = useMediaQuery("(min-width:600px)");


    const [selectActive, setSelectActive] = useState(false);

    const handleFormSubmit = (values) => {
        console.log(values);
    };
    const [isLoading, setIsLoading] = useState(true);


    const [openEdit, setOpenEdit] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [selectedRow, setSelectedRow] = useState(null);
    const [idproduct, setidproduct] = useState('');

    const formRef = useRef();

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (formRef.current && !formRef.current.contains(e.target) && !selectActive) {
                setOpenEdit(false);
                setOpenDelete(false);
                setOpenAdd(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [selectActive]);

    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const api = `https://falth.vercel.app/api/product/store/${_id}?limit=100`;
    const fetchData = async () => {
        try {
            const response = await axios.get(api, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            const responseData = response.data.data.data;
            setData(responseData);
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    };
    const fetchCatname = async () => {
        try {
            const response = await axios.get(`https://falth.vercel.app/api/category`
                , {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
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
        fetchData();
        fetchCatname();
    }, []);
    const handleDeleteProduct = async (id) => {
        try {
            await axios.delete(`https://falth.vercel.app/api/product/${id}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            console.log(id);
            fetchData();
        } catch (error) {
            console.log(error);
        }
    };
    const Addproduct = async (json) => {
        try {
            await axios.post(`https://falth.vercel.app/api/product/store/653233e16d8d513510d93744`, json, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
        } catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(true);
            fetchData();
            setOpenAdd(false);
        }
    };
    const handleidproduct = (id) => {
        setidproduct(id)
        setOpenDelete(false)
        console.log(id);
    };

    const phoneRegExp =
        /^((\+[1-9]{1,4}[ -]?)|(\([0-9]{2,3}\)[ -]?)|([0-9]{2,4})[ -]?)*?[0-9]{3,4}[ -]?[0-9]{3,4}$/;

    const checkoutSchema = yup.object().shape({
        name: yup.string().required("required"),
        price: yup.string().required("required"),
        description: yup.string().required("required"),
    });

    const initialValues = {
        name: "",
        price: "",
        description: "",
        contact: "",
    };
    const initialValuesForEdit = {
        name: "",
        price: "",
        description: "",
        contact: "",
    }

    const handleDetailClick = (row) => {
        setname(row.name);
        setprice(row.price);
        setdis(row.description);
        setCategory(row.category);

        setSelectedRow(row);
        setOpenEdit(true);
        setOpenAdd(false);
    };

    const handleDeleteClick = (row) => {
        setSelectedRow(row);
        setOpenDelete(true);
        setOpenAdd(false);
    };

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const columns = [
        { field: "id", headerName: "ID" },
        {
            field: "name",
            headerName: "Tên",
            type: "number",
            headerAlign: "left",
            align: "left",
            flex: 1,
        },
        {
            field: "price",
            headerName: "Giá tiền",
        },
        {
            field: "Detsil",
            headerName: "Xem Chi Tiết",
            flex: 1,
            renderCell: (params) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={colors.greenAccent[600]}
                        borderRadius="4px"
                        onClick={() => handleDetailClick(params.row)}
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            Xem chi tiết
                        </Typography>
                    </Box>
                );
            },
        },
        {
            headerName: "Xóa",
            flex: 1,
            renderCell: (params) => {
                return (
                    <Box
                        width="60%"
                        m="0 auto"
                        p="5px"
                        display="flex"
                        justifyContent="center"
                        backgroundColor={colors.greenAccent[600]}
                        borderRadius="4px"
                        onClick={() => handleDeleteClick(params.row)}
                    >
                        <Typography color={colors.grey[100]} sx={{ ml: "5px" }}>
                            Xóa
                        </Typography>
                    </Box>
                );
            },
        },
    ];

    const rowsWithUniqueIds = data.map((item, index) => {
        const uniqueId = index;
        return { ...item, id: uniqueId };
    });


    return (
        <Box m="20px" position='relative'>
            <Header title="Sản phẩm" subtitle={
                <Box display="flex" justifyContent="start" mt="20px" onClick={() => { setOpenAdd(true) }}>
                    <Button color="secondary" variant="contained">
                        Thêm sản phẩm
                    </Button>
                </Box>
            } />
            <Box
                m="40px 0 0 0"
                height="75vh"
                sx={{
                    "& .MuiDataGrid-root": {
                        border: "none",
                    },
                    "& .MuiDataGrid-cell": {
                        borderBottom: "none",
                    },
                    "& .name-column--cell": {
                        color: colors.greenAccent[300],
                    },
                    "& .MuiDataGrid-columnHeaders": {
                        backgroundColor: colors.blueAccent[700],
                        borderBottom: "none",
                    },
                    "& .MuiDataGrid-virtualScroller": {
                        backgroundColor: colors.primary[400],
                    },
                    "& .MuiDataGrid-footerContainer": {
                        borderTop: "none",
                        backgroundColor: colors.blueAccent[700],
                    },
                }}
            >
                {openEdit && (
                    <div className="form-container" style={{ position: "absolute", zIndex: 1, top: 0, right: 0, background: colors.primary[400] }}>
                        <Box m="20px" >

                            <div>
                                <Box>
                                    <div>
                                        <Header title={`Chi tiết sản phẩm: ${selectedRow.name}`} subtitle={`ID: ${selectedRow.id}`} />
                                        <Formik
                                            onSubmit={(values) => {
                                                const tenSanPham = values.name;
                                                const giaTien = values.price;
                                                const moTa = values.description;
                                                const danhMuc = category;
                                                const json = {
                                                    catName: danhMuc,
                                                    name: tenSanPham,
                                                    images: 'rfffff',
                                                    price: giaTien,
                                                    description: moTa,
                                                }
                                                console.log(json);

                                            }}
                                            initialValues={initialValuesForEdit}
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
                                                            <img
                                                                alt="profile-user"
                                                                src="https://res.cloudinary.com/drk3oaeza/image/upload/v1698077218/pbl6/rrnhbpqbzdsyjv1ol7mh.png"
                                                                style={{
                                                                    cursor: "pointer",
                                                                    borderRadius: "50%",
                                                                    width: "100px",
                                                                    height: "100px"
                                                                }}
                                                            />
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
                                                            value={dis}
                                                            onBlur={handleBlur}
                                                            onChange={(e) => setdis(e.target.value)}
                                                            name="description"
                                                            sx={{ gridColumn: "span 4" }}
                                                        />


                                                        <NativeSelect
                                                            sx={{ gridColumn: "span 4" }}
                                                            name="category"
                                                            value={category}
                                                            onChange={(e) => setCategory(e.target.value)}
                                                        >
                                                            {Catname.map((option, index) => {
                                                                return (
                                                                    <option value={option.catName}>{option.catName}</option>
                                                                );
                                                            })}
                                                        </NativeSelect>

                                                    </Box>
                                                    <Box display="flex" justifyContent="end" mt="20px">
                                                        <Button type="submit" color="secondary" variant="contained">
                                                            Cập nhật
                                                        </Button>
                                                    </Box>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </Box>
                            </div>

                        </Box>
                    </div>

                )
                }
                {
                    openAdd && (
                        <div className="form-container" style={{ position: "absolute", zIndex: 1, top: 0, right: 0, background: colors.primary[400] }}>
                            <Box m="20px" >
                                <div>
                                    <Header title="Thêm sản phẩm" subtitle="thêm sản phẩm mới" />
                                    <Formik
                                        onSubmit={(values) => {
                                            const tenSanPham = values.name;
                                            const giaTien = values.price;
                                            const moTa = values.description;
                                            const danhMuc = category;

                                            const json = {
                                                "catName": danhMuc,
                                                "name": tenSanPham,
                                                "images": "123123123",
                                                "price": giaTien,
                                                "description": moTa,
                                            }
                                            console.log(json);
                                            Addproduct(json);

                                        }}
                                        initialValues={initialValues}
                                        validationSchema={checkoutSchema}
                                    >
                                        {({
                                            values,
                                            errors,
                                            touched,
                                            handleBlur,
                                            handleChange,
                                            handleSubmit,
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
                                                        <img
                                                            alt="profile-user"
                                                            src={'./avata.jpg'}
                                                            style={{
                                                                cursor: "pointer",
                                                                borderRadius: "50%",
                                                                width: "100px",
                                                                height: "100px"
                                                            }}
                                                        />
                                                    </Box>
                                                    <TextField

                                                        fullWidth
                                                        variant="filled"
                                                        type="text"
                                                        label="Tên sản phẩm"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        error={!!touched.name && !!errors.name}
                                                        helperText={touched.name && errors.name}
                                                        name="name"
                                                        sx={{ gridColumn: "span 2" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        variant="filled"
                                                        type="text"
                                                        label="Giá tiền"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        name="price"
                                                        sx={{ gridColumn: "span 2" }}
                                                    />
                                                    <TextField
                                                        fullWidth
                                                        variant="filled"
                                                        type="text"
                                                        label="Mô tả"
                                                        onBlur={handleBlur}
                                                        onChange={handleChange}
                                                        name="description"
                                                        sx={{ gridColumn: "span 4" }}
                                                    />
                                                    <NativeSelect
                                                        sx={{ gridColumn: "span 4" }}
                                                        name="category"
                                                        value={category}
                                                        onBlur={(e) => setCategory(e.target.value)}
                                                        onChange={(e) => setCategory(e.target.value)}
                                                    >
                                                        {Catname.map((option, index) => {
                                                            return (
                                                                <option value={option.catName}>{option.catName}</option>
                                                            );
                                                        })}
                                                    </NativeSelect>
                                                </Box>
                                                <Box display="flex" justifyContent="end" mt="20px">
                                                    <Button type="submit" color="secondary" variant="contained">
                                                        Thêm mới
                                                    </Button>
                                                </Box>
                                            </Form>
                                        )}
                                    </Formik>
                                </div>
                            </Box>
                        </div>)
                }

                {
                    openDelete && (
                        <div className="form-container" style={{ position: "absolute", zIndex: 1, top: '30%', right: '30%', background: colors.primary[400], border: colors.primary[900] }}>
                            <Box m="20px" >
                                <Box>
                                    <div>
                                        <Header title={`Bạn muốn xóa sản phẩm: ${selectedRow.name}`} subtitle={`ID: ${selectedRow._id}`} />
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
                                                handleSubmit,
                                            }) => (
                                                <Form ref={formRef}>
                                                    <Box display="flex" justifyContent="center" mt="20px" gap='20px'>
                                                        <Button color="secondary" variant="contained" onClick={() => handleDeleteProduct(selectedRow._id)}>
                                                            Xóa sản phẩm
                                                        </Button>
                                                        <Button color="secondary" variant="contained" onClick={() => handleidproduct(selectedRow._id)}>
                                                            Thoát
                                                        </Button>
                                                    </Box>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </Box>
                            </Box>
                        </div>
                    )
                }

                <DataGrid rows={rowsWithUniqueIds} columns={columns} loading={isLoading} />
            </Box >
        </Box >
    );
};

export default Product;
