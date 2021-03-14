import React from "react"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

const HomeSlider = ({ sliderObject }) => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 300,
    responsive: [
      {
        breakpoint: 767,
        settings: {
          centerMode: true,
          slidesToShow: 1,
          dots: true,
          arrows: true,
          swipe: true,
          swipeToSlide: true,
        },
      },
    ],
  }
  return (
    <div className="col-xl-6 offset-xl-0 dreamly-bg col-md-8 col-lg-10 offset-lg-1 p-m-0">
      <Slider className="about-slider-v1" {...settings}>
        {sliderObject &&
          sliderObject.map((slider, index) => {
            return (
              <div className="slider-item" key={index}>
                <img src={slider.image} alt="Image" />
                <p>{slider.sliderTitle}</p>
              </div>
            )
          })}
      </Slider>
    </div>
  )
}

export default HomeSlider
