import React from 'react';
import { Box } from '@mui/material';
import Slider from "react-slick";

const Itemshop = () => {
    return (
        <div>
            <Box>
                <Box display="flex" justifyContent="center" alignItems="center">
                    <img
                        alt="Hồ sơ người dùng"
                        src={'./avata.jpg'}
                        style={{
                            cursor: "pointer", borderRadius: "50%", width: "100px", height: "100px"
                        }}
                    />
                    <span>thnah klich</span>
                </Box>
            </Box>
        </div>
    )
}

const Listshop = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }

    return (
        <>
            <Slider {...settings}>
                <Itemshop />
            </Slider>
        </>
    )
}

export default Listshop;
