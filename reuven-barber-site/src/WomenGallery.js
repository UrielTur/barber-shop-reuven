import React from "react";
import Slider from "react-slick";
import "./WomenGallery.css";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PrevArrow = (props) => (
    <div className="custom-arrow prev" onClick={props.onClick}>
        &#10094;
    </div>
);

// חץ ימינה
const NextArrow = (props) => (
    <div className="custom-arrow next" onClick={props.onClick}>
        &#10095;
    </div>
);

const galleryImages = [
    "women-1",
    "women-2",
    "women-3",
    "women-4",
    "women-5",
    "women-6",
    "women-7",
    "women-8",
    "women-9",
    "women-10",
    "women-11",
    "women-12",
    "women-13",
    "women-14",
    "women-15",
    "women-16",
];

const WomenGallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow/>,
        prevArrow: <PrevArrow/>,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2500,
                },
            },
        ],
    };

    return (
        <div className="carousel-wrapper">
            <Slider {...settings}>
                {galleryImages.map((imageClass, index) => (
                    <div key={index} className={`image-container ${imageClass}`}/>
                ))}
            </Slider>
        </div>
    );
};

export default WomenGallery;

