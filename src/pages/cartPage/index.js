import { useTheme } from "../../contexts/themeContext";
import Header from "../../components/header";
import Cart from "../../components/cart";
import "./style.css";

export default function CartPage() {
    const { theme } = useTheme()

    return (
        <div className={`cart-page ${theme}`}>
            <Header />
            <Cart />
        </div>
    )
}