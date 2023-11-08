import React, { useState, useEffect } from 'react';
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import axios from 'axios';
import Loading from '../../components/Loading/Loading'
import style from './category.css';

const Category = () => {
    const [isLoading, setIsLoading] = useState(true);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [currentPage, setCurrentPage] = useState(1);
    const [catName, setCatName] = useState('');
    const token = localStorage.getItem('autoken');
    const _id = localStorage.getItem('_id');
    const api = `https://falth.vercel.app/api/category/store/${_id}`;
    const [data, setData] = useState([]);
    const itemsPerPage = 8;
    const [totalPages, setTotalPages] = useState(1);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("https://falth.vercel.app/api/product/store/653233e16d8d513510d93744", {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                const responseData = response.data.data;
                setData(responseData);
                setTotalPages(Math.ceil(responseData.length / itemsPerPage));
            } catch (error) {
                console.log(error);
            }
            finally {
                setIsLoading(false)
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
            } catch (error) {
                console.log(error);
            }
        };

        if (catName) {
            fetchProductList();
        }

        fetchData();
    }, [api, token, catName]);

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    return (
        <div className="product">
            {isLoading ? (
                <Loading />
            ) : (
                <>
                    <h2>Category</h2>
                    <div className="container">
                        {data.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage).map((item, index) => (
                            <div key={index} className="box">
                                <div className="img_box">
                                    <img className="image" src={item.images} alt="image" />
                                </div>
                                <div className="detail">
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <div className="rating">
                                        {[...Array(item.ratingAverage)].map((rating, index) => (
                                            <i key={index} className="fa-solid fa-star" style={{ fontSize: '14px' }}></i>
                                        ))}

                                    </div>
                                    <h4>{item.price}</h4>
                                </div>
                            </div>
                        ))}
                    </div>
                    <ul className="pagination">
                        <li className={currentPage === 1 ? 'disabled' : ''}>
                            <a className="" onClick={() => handlePageChange(currentPage - 1)}>
                                <i className="fa-solid fa-circle-chevron-left" style={{ color: 'red', fontSize: '18px', verticalAlign: 'middle' }}></i>
                            </a>
                        </li>
                        {Array.from({ length: totalPages }).map((_, index) => (
                            <li key={index} className={currentPage === index + 1 ? 'active' : ''}>
                                <a className="undefined" href="#" onClick={() => handlePageChange(index + 1)}>{index + 1}</a>
                            </li>
                        ))}
                        <li className={currentPage === totalPages ? 'disabled' : ''}>
                            <a className="" onClick={() => handlePageChange(currentPage + 1)}>
                                <i className="fa-solid fa-circle-chevron-right" style={{ color: 'red', fontSize: '18px', verticalAlign: 'middle' }}></i>
                            </a>
                        </li>
                    </ul>
                </>
            )
            }
        </div >
    );
};

export default Category;
