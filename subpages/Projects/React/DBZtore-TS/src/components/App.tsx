import Banner from "./Banner";
import Cart from "./Cart";
import ShoppingList from "./ShoppingList";
import logo from "../assets/dbz-logo.png";
import styled from "styled-components";
import Footer from "./Footer";
import { useState, useEffect } from "react";
import { CartType } from "../types";

const Logo = styled.img`
  height: 45px;
  width: 45px;
`;

const Title = styled.h1`
  padding-left: 32px;
`;

const LayoutInner = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  // sauvegarde du panier en local storage
  const savedCart = localStorage.getItem("cart");
  const [cart, updateCart] = useState<CartType[]>(
    savedCart ? JSON.parse(savedCart) : []
  );

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return (
    <div>
      <Banner>
        <Logo src={logo} alt="dbz logo" />
        <Title>DB'Ztore</Title>
      </Banner>
      <LayoutInner>
        <Cart cart={cart} updateCart={updateCart} />
        <ShoppingList cart={cart} updateCart={updateCart} />
      </LayoutInner>
      <Footer />
    </div>
  );
}

export default App;
