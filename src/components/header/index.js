import { useTheme } from "../../contexts/themeContext";
import { useShoppingCart } from "../../contexts/shoppingCartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import "./style.css";

export default function Header() {
    const { theme, setTheme } = useTheme()
    const { getCartQuantity } = useShoppingCart()
    const lightBulb = <FontAwesomeIcon icon={faLightbulb} />
    const cartIcon = <FontAwesomeIcon icon={faCartShopping} />
    function toggleTheme() {
        if (theme === "light") {
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }
    return (
        <div className={`header ${theme}`}>
            <div className="container">
                <div className="header-wrapper">
                    <div className="menu-left">
                        <Link to={`/`}>
                            <h3>Home</h3>
                        </Link>
                        <Link to={`/about`}>
                            <h3>About</h3>
                        </Link>
                        <Link to={`/store`}>
                            <h3>Store</h3>
                        </Link>
                    </div>
                    <div className="menu-right">
                        <i className="light-bulb" onClick={() => toggleTheme()}>{lightBulb}</i>
                        <div className="count">
                            <h4>{getCartQuantity()}</h4>
                        </div>
                        <Link to={`/cart`}>
                            <i>{cartIcon}</i>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}