import React from 'react';
import {useNavigate, useLocation} from 'react-router-dom'; // שימוש ב-useNavigate ו-useLocation
import './HomePage.css';
import reuvenBg from '../src/background-video.mp4'
import MenGallery from "./MenGallery";
import NavigationUtils from './NavigationUtils';
import WomenGallery from "./WomenGallery";


// פונקציה שעוטפת את המחלקה עם שימוש ב-useNavigate
function withNavigation(Component) {
    return function WrappedComponent(props) {
        const navigate = useNavigate(); // שימוש ב-useNavigate כדי לספק את פונקציית הניווט
        const location = useLocation(); // שימוש ב-useLocation כדי להעביר את המיקום
        return <Component {...props} navigate={navigate} location={location}/>;
    };
}

class HomePage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            showGalleryMenu: false
        };

        this.secondScreenRef = React.createRef();
        this.menScreenRef = React.createRef();
        this.womenScreenRef = React.createRef();
        this.fourthScreenRef = React.createRef();
        this.galleryMenuRef = React.createRef();
    }

    componentDidMount() {
        this.handleScroll(); // גלילה כאשר העמוד נטען לראשונה
        document.addEventListener('mousedown', this.handleClickOutside); // מאזין ללחיצות עכבר
        window.addEventListener('scroll', this.checkIfInView);
    }

    componentWillUnmount() {
        document.removeEventListener('mousedown', this.handleClickOutside);
        window.removeEventListener('scroll', this.checkIfInView);
    }

    componentDidUpdate(prevProps) {
        // בדיקה אם location השתנה כדי לוודא שה-scroll יתבצע גם בלחיצה על כפתורים מתוך העמוד
        if (this.props.location !== prevProps.location) {
            this.handleScroll();
        }
    }

    handleClickOutside = (event) => {
        if (
            this.state.showGalleryMenu &&
            this.galleryMenuRef.current &&
            !this.galleryMenuRef.current.contains(event.target)
        ) {
            this.setState({showGalleryMenu: false});
        }
    };

    handleScroll = () => {
        const {state} = this.props.location; // קבלת ה-state מהניווט

        if (state && state.scrollTo) {
            switch (state.scrollTo) {
                case 'men-gallery':
                    NavigationUtils.scrollToRef(this.menScreenRef);
                    break;
                case 'women-gallery':
                    NavigationUtils.scrollToRef(this.womenScreenRef);
                    break;
                case 'contact':
                    NavigationUtils.scrollToRef(this.fourthScreenRef);
                    break;
                default:
                    break;
            }
        }

    }

    checkIfInView = () => {
        const section = this.secondScreenRef.current;
        if (!section) return;

        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            const imgs = section.querySelectorAll('.reuven-img');
            imgs.forEach(img => img.classList.add('animate'));
        }
    }


    render() {
        return (
            <div>
                <div className="panel">
                    <a href="/" onClick={(e) => {
                        this.props.navigate('/');
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
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/', {scrollTo: 'contact'})}
                    >
                        <h2>יצירת קשר</h2>
                    </button>
                    <button
                        className={"products"}
                        onClick={() => NavigationUtils.navigateTo(this.props.navigate, '/products')}
                    >
                        <h2>המוצרים שלנו</h2>
                    </button>

                    <a href="https://www.instagram.com/reuvenisraelov/"
                       className={"instagram"}
                       target={"_blank"}
                       rel={"noopener noreferrer"}>
                    </a>

                    <div className={"whatsapp"} onClick={() =>
                        window.open("https://wa.me/972547235955?text=היי%20ראובן%20אני%20רוצה%20לקבוע%20תור", "_blank")
                    }></div>
                </div>

                <div className="bg1">
                    <video className={"video-bg"} autoPlay muted loop playsInline webkit-playsinline preload="auto" id={"background-video"}>
                        <source src={reuvenBg} type={"video/mp4"}/>
                    </video>

                    <image className={"big-logo"}/>

                    <button id={"firstButton"} onClick={() => {
                        window.open("https://wa.me/972547235955?text=היי%20ראובן%20אני%20רוצה%20לקבוע%20תור", "_blank");
                    }}>
                        <h1>לקביעת תור</h1>
                    </button>
                </div>

                <div className={"secondScreen"} ref={this.secondScreenRef}>
                    <h1>ברוכים הבאים למספרה של ראובן</h1>
                    <div className="reuven-grid">
                        <div className="reuven-pair">
                            <p>שירות אדיב ויחס אישי באווירה הכי נעימה ומקצועית</p>
                            <div className="reuven-img img-3"/>
                        </div>

                        <div className="reuven-pair">
                            <p>דגש על התאמה אישית מלאה לכל לקוח ולקוחה</p>
                            <div className="reuven-img img-2"/>
                        </div>

                        <div className="reuven-pair">
                            <p>מעל 15 שנות ניסיון בתחום עיצוב השיער, עם התמחות בעיצובים מודרניים וטיפולי שיער
                                מתקדמים</p>
                            <div className="reuven-img img-1"/>
                        </div>
                    </div>
                </div>

                <div className={"menScreen"} ref={this.menScreenRef}>
                    <h1 id={"men-gallery-text"}>גלריה&nbsp;–&nbsp;תספורות גברים</h1>
                    <p> דירוגים, עיצוב זקן</p>
                    <div><MenGallery> </MenGallery></div>
                </div>

                <div className={"womenScreen"} ref={this.womenScreenRef}>
                    <h1 id={"women-gallery-text"}>גלריה&nbsp;–&nbsp;תספורות נשים</h1>
                    <p> החלקות, צבע, גוונים</p>
                    <div><WomenGallery> </WomenGallery></div>
                </div>

                <div className={"fourScreen"} ref={this.fourthScreenRef}>
                    <a href="/" onClick={(e) => {
                        this.props.navigate('/');
                    }}>
                        <div className={"logo-1"}></div>
                    </a>
                    <div class="text-container">
                        <div id={"text-1"}> ראובן - 054-7235955</div>
                        <div id={"text-2"}> יהודה 2, מודיעין מכבים רעות</div>
                    </div>

                    <div className={"logoim"}>
                        <a href="https://www.instagram.com/reuvenisraelov/"
                           id={"instagram-2"} target={"_blank"} rel={"noopener noreferrer"}></a>
                        <div id={"whatsapp-2"} onClick={() =>
                            window.open("https://wa.me/972547235955?text=היי%20ראובן%20אני%20רוצה%20לקבוע%20תור", "_blank")
                        }></div>
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

export default withNavigation(HomePage);
