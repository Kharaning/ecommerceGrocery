import Header from "./header";
import Hero from "./hero";
import Product from "./product";
import { createContext, useState } from "react";
import Footer from "./footer";
export const cartContext = createContext(null);

function Index({ user }) {
  const [cartItem, setCartItem] = useState([]);

  return (
    <>
      <cartContext.Provider value={[cartItem, setCartItem]}>
        <Header user={user} />
        <Hero />
        <Product />
        <Footer />
      </cartContext.Provider>
    </>
  );
}

export default Index;
