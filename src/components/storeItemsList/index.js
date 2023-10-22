import items from "../../data/items.json";
import { useTheme } from "../../contexts/themeContext";
import { useShoppingCart } from "../../contexts/shoppingCartContext";
import formatCurrency from "../../utilities/formatCurrency";
import "./style.css";

export default function StoreItemsList() {
    const { theme } = useTheme()
    const { getItemQuantity, increaseQuantity, decreaseQuantity } = useShoppingCart()

    function timeLoopStoreItems() {
        return items.map((item) => {
            const { id, name, price, imgUrl } = item;
            const quantity = getItemQuantity(item)
            return (
                <li key={id}>
                    <img src={imgUrl} />
                    <div className="name-price">
                        <h3>{name}</h3>
                        <h3>{formatCurrency(price)}</h3>
                    </div>
                    <div className="cart">
                        <button className="decrease" onClick={() => decreaseQuantity(item)}>-</button>
                        <span>{quantity}</span>
                        <button className="increase" onClick={() => increaseQuantity(item)}>+</button>
                    </div>
                </li>
            )
        })
    }

    return (
        <div className={`items-list ${theme}`}>
            <div className="container">
                <ul>
                    {timeLoopStoreItems()}
                </ul>
            </div>
        </div>
    )
}