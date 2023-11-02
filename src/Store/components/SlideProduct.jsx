import { Box, Typography, useTheme } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";
import Sdata from "./Sdata"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import "./style.css"
import { mockBarData } from "../data/mockData";

const SlideProduct = ({ data, onAccessCategory }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
    <Box width="90%" m="0 50px">
      <Box display="flex" >
      </Box>
      <Slider {...settings}>
        {data.map((value, index) => {
          return (
            <>
              <div className='box d_flex top' key={index} style={{ display: 'flex', paddingLeft: '5%', gap: '30%' }}>
                <div className='left'>
                  <h1>Danh mục : {value.catName}</h1>
                  <p>{value.desc}</p>
                  <button
                    className='btn-primary'
                    style={{ width: '200px', height: '30px', borderRadius: '20', background: '' }}
                    onClick={() => {
                      onAccessCategory(value.catName);
                    }}
                  >
                    Truy cập danh mục
                  </button>

                </div>
                <div className='right' style={{ flex: '2', padding: '10px 50px' }}>
                  <img src={value.catName} alt='' style={{ width: '200px', height: '200px', justifyItems: 'end' }} />
                </div>
              </div>

            </>
          )
        })}
      </Slider>
    </Box>
  );
};

export default SlideProduct;