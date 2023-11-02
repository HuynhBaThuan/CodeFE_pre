import React, { useState, useEffect } from 'react';
import { Box, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import SlideProduct from "../../components/SlideProduct";
import ProductCate from "../../components/ProductCate";
import axios from 'axios';

const Category = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [catName, setCatName] = useState('');

    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const api = `https://falth.vercel.app/api/category/store/${_id}`;
    const [data, setData] = useState([]);
    const [productList, setProductList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://falth.vercel.app/api/category/store/651d7093e1494e0d580de290", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const responseData = response.data.data;
                setData(responseData);
            } catch (error) {
                console.log(error);
            }
        };

        const fetchProductList = async () => {
            try {
                const response = await axios.get(`https://falth.vercel.app/api/product?catName=${catName}`, {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const responseData = response.data.data.data;
                setProductList(responseData);
            } catch (error) {
                console.log(error);
            }
        };

        if (catName) {
            fetchProductList();
        }

        fetchData();
    }, [api, token, catName]);

    const handleAccessCategory = (categoryData) => {
        setCatName(categoryData);
        console.log(categoryData);
    };

    return (
        <Box m="20px">
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gridAutoRows="140px"
                gap="20px"
            >
                <Box
                    gridColumn="span 12"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                >
                    <SlideProduct data={data} onAccessCategory={handleAccessCategory} />
                </Box>

                <Box
                    gridColumn="span 12"
                    gridRow="span 2"
                    backgroundColor={colors.primary[400]}
                    overflow="auto"
                >
                    <ProductCate data={productList} />
                </Box>
            </Box>
        </Box>
    );
};

export default Category;
