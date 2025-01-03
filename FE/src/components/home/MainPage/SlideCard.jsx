import React from "react"
import Sdata from "./Sdata"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const SlideCard = () => {
  const settings = {
    dots: true, // Hiển thị các nút tròn tự động
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    appendDots: (dots) => {
      return <ul style={{ margin: "0px" }}>{dots}</ul> // Hiển thị các nút tròn
    },
  }

  return (
    <div className="container-large"> {/* Container lớn */}
      <div className="slider-card">
        <div className="slider-container">
          <Slider {...settings}>
            {Sdata.map((value, index) => {
              return (
                <div className="box d_flex top" key={index}>
                  {/* Container chứa thông tin và hình ảnh */}
                  <div className="container-bigger">
                    {/* Container nhỏ 1: chứa các thông tin */}
                    <div className="info-container">
                      <h1>{value.title}</h1>
                      <p>{value.desc}</p>
                      <button className="btn-primary">Visit Collections</button>
                    </div>

                    {/* Container nhỏ 2: chứa hình ảnh */}
                    <div className="image-container">
                      <img src={value.cover} alt="" />
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default SlideCard