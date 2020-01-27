import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

import Img1 from "../../image/1.png"
import { Link } from "gatsby"

const PhotographyContent = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <React.Fragment>
      <h3 className="sb-main-content__title">Photography</h3>
      <div className="slider-container">
        <Slider {...settings}>
          <div className="photography__slide">
            <Link to="/photography/p1">
              <img src={Img1} />
            </Link>
            <Link>
              <img src={Img1} />
            </Link>
            <Link>
              <img src={Img1} />
            </Link>
            <Link>
              <img src={Img1} />
            </Link>
            <Link>
              <img src={Img1} />
            </Link>
            <Link>
              <img src={Img1} />
            </Link>
          </div>
          <div className="photography__slide">
            <div>
              <img src={Img1} />
            </div>
            <div>
              <img src={Img1} />
            </div>
          </div>
        </Slider>
      </div>
    </React.Fragment>
  )
}

export default PhotographyContent
