import { createContext, useContext, useEffect, useState } from "react";

const shoppingCartContext = createContext()
export function useShoppingCart() {
    return useContext(shoppingCartContext)
}
export function ShoppingCartProvider({ children }) {
    const [cartItems, setCartItems] = useState(localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [])
    function getItemQuantity(item) {
        const isItemInCart = cartItems.find(function (cartItem) {
            return cartItem.id === item.id
        })
        if (isItemInCart) {
            return isItemInCart.quantity
        } else {
            return 0
        }
    }
    function increaseQuantity(item) {
        const isItemInCart = cartItems.find(function (cartItem) {
            return cartItem.id === item.id
        })
        if (isItemInCart) {
            setCartItems(
                cartItems.map(function (cartItem) {
                    if (cartItem.id === item.id) {
                        return {...cartItem, quantity: cartItem.quantity + 1}
                    } else {
                        return cartItem
                    }
                })
            )
        } else {
            setCartItems([...cartItems, {...item, quantity: 1}])
        }
    }
    function decreaseQuantity(item) {
        const isItemInCart = cartItems.find(function (cartItem) {
            return cartItem.id === item.id
        })
        if (isItemInCart?.quantity === 1) {
            setCartItems(cartItems.filter(function (cartItem) {
                return cartItem.id !== item.id
            }))
        } else {
            setCartItems(
                cartItems.map(function (cartItem) {
                    if (cartItem.id === item.id) {
                        return {...cartItem, quantity: cartItem.quantity - 1}
                    } else {
                        return cartItem
                    }
                })
            )
        }
    }
    function removeItem(item) {
        setCartItems(cartItems.filter(function (cartItem) {
            return cartItem.id !== item.id
        }))
    }
    function getCartTotalPrice() {
        return cartItems.reduce(function (total, item) {
            return total + item.price * item.quantity
        }, 0);
    }
    function getCartQuantity() {
        return cartItems.reduce(function (total, item) {
            return total + item.quantity
        }, 0)
    }

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems))
    }, [cartItems])
    useEffect(() => {
        const cartItems = localStorage.getItem("cartItems")
        if (cartItems) {
            setCartItems(JSON.parse(cartItems))
        }
    }, [])

    return (
        <shoppingCartContext.Provider value={{cartItems, getItemQuantity, increaseQuantity, decreaseQuantity, removeItem, getCartTotalPrice, getCartQuantity}}>
            {children}
        </shoppingCartContext.Provider>
    )
}