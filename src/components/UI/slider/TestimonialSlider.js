import React from "react";
import Slider from "react-slick";

import ava01 from "../../../assets/Images/ava-1.jpg";
import ava02 from "../../../assets/Images/ava-2.jpg";
import ava03 from "../../../assets/Images/ava-3.jpg";
import ava04 from "../../../assets/Images/ava-4.jpg";

import "../../../styles/slider.css";

const TestimonialSlider = () => {
  const settings = {
    dots: true,
    autoplay: true,
    infinite: true,
    speed: 1000,
    autoplaySpeed: 3000,
    swipeToSlide: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <p className="review_text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className=" slider_content d-flex align-items-center gap-3 ">
          <img src={ava01} alt="avatar" className=" rounded" />
          <h6>hào yáng</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider_content d-flex align-items-center gap-3 ">
          <img src={ava02} alt="avatar" className=" rounded" />
          <h6>Xīn yán</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider_content d-flex align-items-center gap-3 ">
          <img src={ava03} alt="avatar" className=" rounded" />
          <h6>Yǔxuān</h6>
        </div>
      </div>
      <div>
        <p className="review_text">
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
          atque, quam minus totam maiores laborum! Impedit consectetur illum
          aliquid odit. Odit dolore ipsum quod debitis nostrum necessitatibus
          quis dolorem quas!"
        </p>
        <div className="slider_content d-flex align-items-center gap-3 ">
          <img src={ava04} alt="avatar" className=" rounded" />
          <h6>chán juān</h6>
        </div>
      </div>
    </Slider>
  );
};

export default TestimonialSlider;
