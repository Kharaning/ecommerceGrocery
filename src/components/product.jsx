import "./product.scss";
import menuItems from "../assets/menu";
import ProductCard from "./productCard";
import { useState } from "react";
import productList from "../assets/productList";
const Product = () => {
  const [active, setActive] = useState("Everything");

  return (
    <div className="productContainer">
      <a href="#productSection" id="startButton">
        Start Ordering Now ↓↓
      </a>
      <div id="productSection">
        
        <div className="productCategory">
          {menuItems.map((item) => {
            return (
              <li
                key={item.id}
                onClick={() => setActive(item.name)}
                className={`list-item ${active == item.name && "active"}`}
              >
                {item.icon} {item.name}
              </li>
            );
          })}
        </div>
        <div className="productDisplay">
         
          {active === "Everything"
            ? productList.map((item) => {
                return <ProductCard key={item.id} item={item} />;
              })
            : productList
                .filter((item) => item.category === active)
                .map((item) => {
                  return <ProductCard key={item.id} item={item} />;
                })}
        </div>
      </div>
    </div>
  );
};

export default Product;
