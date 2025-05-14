// import React, { useState, useEffect } from "react";
// import "./MenGallery.css"; // מייבא את ה-CSS
//
// const galleryImages = [
//     "image-1",
//     "image-2",
//     "image-3",
//     "image-4",
//     "image-5",
//     "image-6",
//     "image-7",
// ];
//
// const MenGallery = () => {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const [isMobile, setIsMobile] = useState(false);
//
//     useEffect(() => {
//         const handleResize = () => {
//             setIsMobile(window.innerWidth <= 768);
//         };
//
//         window.addEventListener('resize', handleResize);
//         handleResize(); // קרא לפונקציה פעם אחת בתחילה
//
//         return () => {
//             window.removeEventListener('resize', handleResize);
//         };
//     }, []);
//
//     const nextImage = () => {
//         setCurrentIndex((prevIndex) => {
//             let nextIndex = prevIndex + 1;
//             if (isMobile && nextIndex === 2) {
//                 nextIndex = 3; // דלג על התמונה השלישית
//             }
//             return nextIndex >= galleryImages.length ? 0 : nextIndex;
//         });
//     };
//
//     const prevImage = () => {
//         setCurrentIndex((prevIndex) => {
//             let prevIndexNew = prevIndex - 1;
//             if (isMobile && prevIndexNew === 2) {
//                 prevIndexNew = 1; // דלג על התמונה השלישית
//             }
//             return prevIndexNew < 0 ? galleryImages.length - 1 : prevIndexNew;
//         });
//     };
//
//
//     /*////////////////////////////////////////////////////////////////////////////////////////////////////////*/
//
//
//     return (
//         <div className="carousel-container">
//             <button className="prev-button" onClick={prevImage}>
//                 &lt;
//             </button>
//             <div className={`image-container ${galleryImages[currentIndex]}`} />
//             <button className="next-button" onClick={nextImage}>
//                 &gt;
//             </button>
//         </div>
//     );
// };
//
// export default MenGallery;




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
    "image-1", "image-2", "image-3", "image-4", "image-5", "image-6", "image-7",
];

const MenGallery = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    autoplay: true,
                    autoplaySpeed: 2500,    // כל 3 שניות

                },
            },
        ],
    };

    return (
        <div className="carousel-wrapper">
            <Slider {...settings}>
                {galleryImages.map((imageClass, index) => (
                    <div key={index} className={`image-container ${imageClass}`} />
                ))}
            </Slider>
        </div>
    );
};

export default MenGallery;

//

//
// import React from "react";
// import MenGalleryDesktop from "./MenGalleryDesktop";
// import MenGalleryMobile from "./MenGalleryMobile";
// import "./MenGallery.css";
//
// const MenGallery = () => {
//     return (
//         <div className="gallery-wrapper">
//             <div className="desktop-gallery">
//                 <MenGalleryDesktop />
//             </div>
//             <div className="mobile-gallery">
//                 <MenGalleryMobile />
//             </div>
//         </div>
//     );
// };
//
// export default MenGallery;
//

