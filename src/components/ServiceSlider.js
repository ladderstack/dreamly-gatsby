import React, { useState, useRef, useEffect } from "react"
import Slider from "react-slick"
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"
import Img from "gatsby-image"

const ServiceSlider = ({ sliderData }) => {
  const [nav1, setNav1] = useState(null)
  const [nav2, setNav2] = useState(null)
  const slider1 = useRef(null)
  const slider2 = useRef(null)

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
    slidesToShow: 4,
    slidesToScroll: 1,
    draggable: true,
    infinite: true,
    focusOnSelect: true,
    // responsive: [
    //   {
    //     breakpoint: 1920,
    //     settings: {
    //       slidesToShow: 5,
    //       slidesToScroll: 1,
    //     },
    //   },
    // ],
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
            sliderData.map((slide, index) => {
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
            {sliderData &&
            sliderData.map((slide, index) => {
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
            sliderData.map((slide, index) => {
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
            {sliderData &&
            sliderData.map((slide, index) => {
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
