class NavigationUtils {
    static navigateTo(navigate, path, state = {}) {
        navigate(path, {state}); // מבצע ניווט לנתיב עם state שניתן
    }

    static scrollToRef(ref) {
        if (ref.current) {
            const top = ref.current.offsetTop;
            window.scrollTo({
                top: top - 110, // משנה את ההיסט כך שיגיע 100 פיקסלים לפני האלמנט
                behavior: 'smooth'
            });
        }
    }

}

export default NavigationUtils;
