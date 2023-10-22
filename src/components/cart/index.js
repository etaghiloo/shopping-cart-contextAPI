import { useTheme } from "../../contexts/themeContext";
import { useShoppingCart } from "../../contexts/shoppingCartContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import formatCurrency from "../../utilities/formatCurrency";
import "./style.css";

export default function Cart() {
    const { theme } = useTheme()
    const { cartItems, getItemQuantity, increaseQuantity, decreaseQuantity, removeItem, getCartTotalPrice } = useShoppingCart()
    const xMark = <FontAwesomeIcon icon={faXmark} />
    function timeLoopCartItems() {
        return cartItems.map((cartItem) => {
            const { id, name, price, imgUrl } = cartItem;
            const quantity = getItemQuantity(cartItem);
            const itemTotalPrice = price * quantity;
            return (
                <li key={id}>
                    <div className="info-left">
                        <img src={imgUrl} />
                        <h3 className="name">{name}</h3>
                        <div className="quantity">
                            <button className="decrease" onClick={() => decreaseQuantity(cartItem)}>-</button>
                            <span>{quantity}</span>
                            <button className="increase" onClick={() => increaseQuantity(cartItem)}>+</button>
                        </div>
                    </div>
                    <div className="info-right">
                        <h3 className="price">{formatCurrency(itemTotalPrice)}</h3>
                        <i onClick={() => removeItem(cartItem)}>{xMark}</i>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className={`cart-list ${theme}`}>
            <div className="cart-list-box">
                <ul>
                    {timeLoopCartItems()}
                </ul>
                <div className="total-price">
                    <h2>TOTAL</h2>
                    <h3>{formatCurrency(getCartTotalPrice())}</h3>
                </div>
            </div>
        </div>
    )
}