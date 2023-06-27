import {FiTrash} from "react-icons/fi"
import "./cartCard.scss"
import { useState, useContext } from "react"
import { cartContext } from "./index";
const CartCard = ({ item }) => { 
    const [cartItem, setCartItem] = useContext(cartContext)
    
    const removeItem = () => { 
        const findItemIndex = cartItem.indexOf(cartItem.find(s => s.id === item.id))
        const newCartItem = [...cartItem]
        newCartItem.splice(findItemIndex, 1) 
        setCartItem(newCartItem)
    }
    return (
        <div className="cartCardContainer">
            <h4>{item.value}</h4>
            <span>x</span>
            <h4>{item.unit}</h4>
            <h3>{item.name}</h3>
            <FiTrash id="deleteIcon" onClick={removeItem} />
        </div>
    )
}


export default CartCard