import React, { useState, useRef, useEffect } from "react"
import Slider from "react-slick"
import Img from "gatsby-image"

interface Props {
  sliderData: []
}

const ServiceSlider: React.FC<Props> = ({ sliderData }) => {
  const [nav1, setNav1] = useState()
  const [nav2, setNav2] = useState()
  
  const slider1 = useRef<any | null>(null);
  const slider2 = useRef<any | null>(null);

  useEffect(() => {
    setNav1(slider1.current)
    setNav2(slider2.current)
  }, [])

  const sliderOneSetting = {
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    fade: true,
    dots: true,
  }

  const sliderTwoSetting = {
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    centerMode: false,
    draggable: true,
    infinite: true,
    focusOnSelect: true,
  }
  return (
    <div className="service-slider-wrap lg-none">
      <div className="service-slider-left">
        <Slider
          className="service-for service-for-one"
          ref={slider1}
          asNavFor={nav2}
          {...sliderOneSetting}
        >
          {sliderData &&
            sliderData.map((slide: any, index) => {
              return (
                <div className="slider-item-wrap" key={index}>
                  <div className="service-slider-item">
                    <div className="service-item-img">
                      <Img
                        fluid={slide.image.childImageSharp.fluid}
                        alt="Iamge"
                      />
                    </div>
                    <div className="service-item-info">
                      <h2>{slide.heading}</h2>
                      <p>{slide.description}</p>
                    </div>
                  </div>
                </div>
              )
            })}
        </Slider>
      </div>
      <div className="service-slider-right">
        <Slider
          className="service-nav service-nav-one"
          ref={slider2}
          asNavFor={nav1}
          {...sliderTwoSetting}
        >
          {sliderData &&
            sliderData.map((slide: any, index) => {
              return (
                <div className="slider-item" key={index}>
                  <Img
                    fluid={slide.image.childImageSharp.fluid}
                    alt="Image"
                    className="image-slide"
                  />
                  <p>{slide.heading}</p>
                </div>
              )
            })}
        </Slider>
      </div>
    </div>
  )
}

export default ServiceSlider
