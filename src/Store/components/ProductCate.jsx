import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import Sdata from "./Sdata"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
// import 'font-awesome/css/font-awesome.min.css';


const ProductCate = ({ data }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const renderStars = (count) => {
        const stars = [];
        for (let i = 0; i < count; i++) {
            stars.push(<i className="fa fa-star" key={i}></i>);
        }
        return stars;
    };


    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }

    return (
        <Box width="90%" m="0 50px"  >
            <Slider {...settings}>
                {data.map((value, index) => {
                    return (
                        <>
                            <div className='box' >
                                <div className='product mtop'>
                                    <div className='product-details'>
                                        <img className='imgproduct' src="./avata.jpg" alt='' />
                                        <div className='product-like'>
                                            <label>12123132</label> <br />
                                            <i className='fa-regular fa-heart' >wwqwqw</i>
                                        </div>
                                        <h3>{value.name}</h3>
                                        <div className='rate'>
                                            {renderStars(value.ratingAverage)}
                                        </div>
                                        <div className='price'>
                                            <h4>${value.price}</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </>
                    )
                })}
            </Slider>
        </Box>
    );
};

export default ProductCate;
