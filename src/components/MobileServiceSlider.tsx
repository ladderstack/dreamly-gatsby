import React from "react"
import Slider from "react-slick"

interface Props {
  sliderData: []
}

const MobileServiceSlider: React.FC<Props> = ({ sliderData }) => {
  const sliderRef = React.useRef()
  const SliderSetting = {
    centerMode: true,
    slidesToShow: 1,
    dots: true,
    arrows: true,
    swipe: true,
    swipeToSlide: true,
  }
  return (
    <Slider
      className="hide-mobile mobile-service-slider-one"
      {...SliderSetting}
    >
      {sliderData &&
        sliderData.map((slide: any, index) => {
          return (
            <div className="mobile-slider-item-wrap" key={index}>
              <div
                className="mobile-slider-item"
                style={{
                  backgroundImage: `url(${slide.image.childImageSharp.fluid.src})`,
                }}
              ></div>
              <div className="mobile-slider-item-info">
                <h2>{slide.heading}</h2>
                <p>{slide.description}</p>
              </div>
            </div>
          )
        })}
    </Slider>
  )
}

export default MobileServiceSlider
