// Import Css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../global.css";

const layout = ({ children }) => {
    return (
        <main>
            {children}
        </main>
    );
}

export default layout;