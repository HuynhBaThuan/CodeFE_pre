import React from "react"
import Sdata from "../../components/Sdata"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        appendDots: (dots) => {
            return <ul style={{ margin: "0px" }}>{dots}</ul>
        },
    }
    return (
        <>
            <Slider {...settings}>
                {Sdata.map((value, index) => {
                    return (
                        <>
                            <div>Thanh lich deo trai</div>
                        </>
                    )
                })}
            </Slider>
        </>
    )
}

export default SlideCard