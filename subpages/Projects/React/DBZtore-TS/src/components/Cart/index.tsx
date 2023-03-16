import styled from "styled-components";
import { useState, useEffect } from "react";
import { CartProps } from "../../types";
import CartItemButtons from "../CartItemButtons";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import { textAlign } from "@mui/system";

const CartDiv = styled.div`
  color: WhiteSmoke;
  background-color: Maroon;
  padding: 16px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 300px;
`;

const CartToggleBtn = styled.button`
  background: none;
  outline: none;
  border: none;
  font-weight: 600;
  cursor: pointer;
  align-self: self-start;
  padding: 0;
  align-self: flex-end;
`;

const CartClose = styled.div`
  padding: 32px;
  width: 300px;
`;

const CartOpenBtn = styled(CartToggleBtn)`
  color: WhiteSmoke;
`;

const CartUl = styled.ul`
  padding-left: 0;
`;

const Item = styled.li`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 0.5rem;
`;

const TitleCartFlex = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CartTitle = styled.h2`
  padding-bottom: 5px;
`;
const CartIconAlign = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export default function Cart({ cart, updateCart }: CartProps) {
  const [isOpen, setIsOpen] = useState(false);

  const cartTotal = cart.reduce(
    (acc: number, fig) => acc + fig.price * (fig.quantity ?? 0),
    0
  );

  useEffect(() => {
    document.title = `DB'Ztore${
      cartTotal !== 0 ? ` - Panier ${cartTotal}€` : ""
    }`;
  }, [cartTotal]);

  return isOpen ? (
    <CartDiv>
      <CartOpenBtn onClick={() => setIsOpen(false)}>
        <CloseIcon
          sx={{
            p: 0.2,
            borderRadius: 5,
            "&:hover": { backgroundColor: "#4d1212" },
          }}
        />
      </CartOpenBtn>
      <TitleCartFlex>
        <CartTitle>Panier</CartTitle>
        <CartIconAlign>
          <IconButton
            onClick={() => updateCart([])}
            color="inherit"
            sx={{
              p: 0.7,
              borderRadius: 5,
              "&:hover": { backgroundColor: "#4d1212" },
            }}
          >
            <RemoveShoppingCartIcon />
          </IconButton>
        </CartIconAlign>
      </TitleCartFlex>
      <CartUl>
        {cart.map((fig, i) => (
          <Item key={`${fig.name}-${i}`}>
            <div>{fig.name} : </div>
            <div>
              {fig.price}€ x {fig.quantity}
            </div>
            <CartItemButtons cart={cart} updateCart={updateCart} fig={fig} />
          </Item>
        ))}
      </CartUl>
      <h3>Total : {cartTotal}€ </h3>
    </CartDiv>
  ) : (
    <CartClose>
      <CartToggleBtn onClick={() => setIsOpen(true)}>
        <ShoppingCartIcon
          sx={{
            color: "WhiteSmoke",
            bgcolor: "#800000",
            p: 2,
            borderRadius: 12,
            boxShadow: 5,
          }}
        />
      </CartToggleBtn>
    </CartClose>
  );
}
