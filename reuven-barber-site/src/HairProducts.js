import React from 'react';
import ProductCard from './ProductCard';  // החיבור לקומפוננטת כרטיס המוצר
import textureVolumeImage from './Images/texture-volume-1.jpeg';
import waxNishMan from './Images/wax-nish-man.jpg';
import afterShaveNishMan from './Images/after-shave-nish-man.jpg';
import beardOil from './Images/beard-oil.jpg';
import saltSpray from './Images/salt-spray.jpg';
import kemeiFinish from './Images/kemei-2299.jpg';
import jrlClipper from './Images/jrl-clipper.jpg';
import redOne from './Images/redOne-wax.png';
import NavigationUtils from './NavigationUtils';
import {useNavigate} from "react-router-dom";




function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate(); // שימוש ב-useNavigate כדי לספק את פונקציית הניווט
        return <Component {...props} navigate={navigate} />;
    };
}


class HairProducts extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showGalleryMenu: false
        };
        this.menScreenRef = React.createRef();
        this.womenScreenRef = React.createRef();
        this.fourthScreenRef = React.createRef();

        this.galleryMenuRef = React.createRef();

    }


    componentDidMount() {
        window.scrollTo(0, 0); // גולל אוטומטית לראש העמוד כאשר דף ה-products נטען
        document.addEventListener('mousedown', this.handleClickOutside); // מאזין ללחיצות עכבר
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
    }

    handleClickOutside = (event) => {
        if (
            this.state.showGalleryMenu &&
            this.galleryMenuRef.current &&
            !this.galleryMenuRef.current.contains(event.target)
        ) {
            this.setState({ showGalleryMenu: false });
        }
    };






    getProductsList = () => {

        return [
            {
                onSale: false,
                image: textureVolumeImage,
                name: "אבקת נפח לשיער",
                originalPrice: 80.00,
                discountedPrice: 60.00
            },
            {
                onSale: false,
                image: waxNishMan,
                name: "ווקס לשיער",
                originalPrice: 100.00,
                discountedPrice: 80.00
            },
            {
                onSale: false,
                image: beardOil,
                name: "שמן לזקן",
                originalPrice: 70.00,
                discountedPrice: 50.00
            },
            {
                onSale: false,
                image: saltSpray,
                name: "ספריי מלח לשיער",
                originalPrice: 60.00,
                discountedPrice: 40.00
            },
            {
                onSale: false,
                image: redOne,
                name: "ווקס חימר לשיער",
                originalPrice: 80.00,
                discountedPrice: 60.00
            },
            {
                onSale: false,
                image: afterShaveNishMan,
                name: "אפטר שייב",
                originalPrice: 60.00,
                discountedPrice: 40.00
            },
            {
                onSale: true,
                image: jrlClipper,
                name: "JRL - מכונת תספורת מקצועית",
                originalPrice: 750.00,
                discountedPrice: 680.00
            },
            {
                onSale: true,
                image: kemeiFinish,
                name: "Kemei - מכונת פיניש מקצועית",
                originalPrice: 250.00,
                discountedPrice: 200.00
            }

        ];
    }



    render() {
        const products = this.getProductsList();

        return (
            <div>
                <div className={"panel"}>
                    <a href="/" onClick={(e) => {
                        this.props.navigate('/'); // נווט לעמוד הבית בלי state
                    }}>
                        <image className={"logo"}/>
                    </a>
                    <div className="gallery-dropdown">
                        <button className="gallery"
                                onClick={() => this.setState({showGalleryMenu: !this.state?.showGalleryMenu})}>
                            <h2>גלריה</h2>
                        </button>

                        {this.state?.showGalleryMenu && (
                            <div className="gallery-dropdown-menu" ref={this.galleryMenuRef}>
                                <button
                                    onClick={() => {
                                        this.setState({showGalleryMenu: false});
                                        NavigationUtils.navigateTo(this.props.navigate, '/', {scrollTo: 'men-gallery'});
                                    }}>
                                    <h3> תספורות גברים</h3>
                                </button>
                                <button
                                    onClick={() => {
                                        this.setState({showGalleryMenu: false});
                                        NavigationUtils.navigateTo(this.props.navigate, '/', {scrollTo: 'women-gallery'});
                                    }}>
                                    <h3> תספורות נשים</h3>
                                </button>
                            </div>
                        )}
                    </div>
                    <button
                        className={"contact"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/', {scrollTo: 'contact'})}>
                        <h2>יצירת קשר</h2>
                    </button>

                    <button
                        className={"products"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/products')}>
                        <h2>המוצרים שלנו</h2>
                    </button>

                    <a href="https://www.instagram.com/avizaurov_barbershop?igsh=cnRhM3Rub3pxamli"
                       className={"instagram"} target={"_blank"} rel={"noopener noreferrer"}></a>
                    <a href="https://wa.me/972527455035" className={"whatsapp"} target={"_blank"}
                       rel={"noopener noreferrer"}></a>
                </div>

                <div className={"products-list"} style={{paddingTop: '140px', marginLeft: '20px'}}>
                    {products.map((product, index) => (
                        <ProductCard
                            key={index}
                            onSale={product.onSale}
                            image={product.image}
                            name={product.name}
                            description={product.description}
                            originalPrice={product.originalPrice}
                            discountedPrice={product.discountedPrice}
                        />
                    ))}
                </div>

                <div className={"fourScreen"} ref={this.fourthScreenRef}>
                    <a href="/" onClick={(e) => {
                        this.props.navigate('/');
                    }}>
                        <div className={"logo-1"}></div>
                    </a>
                    <div className="text-container">
                        <div id={"text-1"}> ראובן - 054-7235955</div>
                        <div id={"text-2"}> יהודה 2, מודיעין מכבים רעות</div>
                    </div>

                    <div className={"logoim"}>
                        <a href="https://www.instagram.com/reuvenisraelov/"
                           id={"instagram-2"} target={"_blank"} rel={"noopener noreferrer"}></a>
                        <a href="https://wa.me/972547235955?text=היי%20ראובן%20אני%20רוצה%20לקבוע%20תור"
                           id={"whatsapp-2"} target={"_blank"}
                           rel={"noopener noreferrer"}></a>
                    </div>
                    <div className={"map-container"}>
                        <iframe
                            id={"map"}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3387.765343104979!2d35.00777228484035!3d31.885796681250227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1502cdd75686f797%3A0xc78796331437cf3d!2z15nXlNeV15PXlCAyLCDXnteV15PXmdei15nXnyDXnteb15HXmdedINeo16LXldeq!5e0!3m2!1siw!2sil!4v1746352694756!5m2!1siw!2sil"
                            width="250"
                            height="200"
                            style={{border: 0}}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
        );
    }
}

export default withNavigation(HairProducts);
