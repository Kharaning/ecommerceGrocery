import React from "react";
import "./header.scss";
import { Link } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { FaUserAlt } from "react-icons/fa";
import { AiOutlineShoppingCart, AiOutlineClose } from "react-icons/ai";
import { cartContext } from "./index";
import { useState, useContext } from "react";
import CartCard from "./cartCard";
function Header({ user }) {
  const [cartItem, setCartItem] = useContext(cartContext);
  const [modalState, setModalState] = useState(false);
  
  const totalItems = () => {
    let totalItemsCounter = 0;
    cartItem.map((s) => {
      totalItemsCounter += s.value;
    });
    return totalItemsCounter;
  };

  const totalPrice = () => {
    let totalPriceCounter = 0;
    cartItem.map((s) => {
      totalPriceCounter += s.value * s.price;
    });
    return totalPriceCounter;
  };
  return (
    <>
      <div className="headerContainer">
        <h1>Grocerly</h1>
        
        <div className="menu">
          {user.email ? (
            <Link to="/profile">
              <div className="profContainer">
                <CiUser className="pfp" />
                <span>{user.email}</span>
              </div>
            </Link>
          ) : (
            <div className="authContainer">
              <Link to="/login">
                <button>
                  <FaUserAlt />
                  Log in
                </button>
              </Link>
            </div>
          )}
          <div className="cartContainer" onClick={() => setModalState(true)}>
            <AiOutlineShoppingCart className="cartIcon" />
            <span>{cartItem.length}</span>
          </div>
        </div>
      </div>
      <div className={`cartModal  ${modalState === true && "activeModal"}`}>
        <div className="closeModalIcon">
          <AiOutlineClose
            onClick={() => setModalState(false)}
            className="closeModal"
          />
        </div>
        <div className="productListContainer">
          {cartItem.map((s) => {
            return <CartCard item={s} key={s.id} />;
          })}
        </div>
        <div className="totalContainer">
          <span className="line"></span>
          <div className="total">
            <h4>
              Items <span>{totalItems()}</span>
            </h4>
            <h4>
              Total<span>{totalPrice()}</span>
            </h4>
          </div>
        </div>
        <div className="purchButton">
          
          <button
            className="purchase"
            disabled
            title="Shop is currently disabled"
          >
            Purchase
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
