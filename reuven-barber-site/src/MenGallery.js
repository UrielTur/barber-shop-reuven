import React from "react";
import Slider from "react-slick";
import "./MenGallery.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// חץ שמאלה
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
    "image-1", "image-3", "image-4", "image-5", "image-6", "image-7",
];

const MenGallery = () => {
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
                    autoplaySpeed: 2500,    // מעבר כל 2.5 שניות

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

export default MenGallery;

