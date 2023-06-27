import { AiOutlinePlusCircle, AiOutlineMinusCircle } from "react-icons/ai";
import "./productCard.scss";
import { useState, useContext } from "react";
import { cartContext } from "./index";
const ProductCard = ({ item }) => {
  const [productValue, setProductValue] = useState(1);
  const [cartItem, setCartItem] = useContext(cartContext);

  const decreaseProductValue = () => {
    if (productValue > 1) {
      setProductValue(productValue - 1);
    }
    return;
  };
  function addToCart() {
    if (cartItem.find((s) => s.id === item.id)) {
      const existingItemIndex = cartItem.indexOf(
        cartItem.find((s) => s.id === item.id)
      );
      const cartCopy = [...cartItem];
      cartCopy[existingItemIndex].value += productValue;
      setCartItem(cartCopy);
    } else {
      const newItem = { ...item };
      newItem.value = productValue;
      setCartItem(cartItem.concat(newItem));
    }
  }
  return (
    <div className="productCard">
      <h4>{item.name}</h4>
      <div className="productImage">
        <img src={item.img} />
      </div>

      <div className="productValue">
        <div id="price">
          <span>{item.price}$</span>
          <span>/{item.unit}</span>
        </div>
        <div id="value">
          <AiOutlineMinusCircle
            className="valueIcon"
            onClick={decreaseProductValue}
          />
          <span>{productValue}</span>
          <AiOutlinePlusCircle
            className="valueIcon"
            onClick={() => {
              setProductValue(productValue + 1);
            }}
          />
        </div>
      </div>
      <button onClick={addToCart}>add to cart</button>
    </div>
  );
};

export default ProductCard;
