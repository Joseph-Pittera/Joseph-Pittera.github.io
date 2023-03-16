import CareScale from "../CareScale";
import styled from "styled-components";
import { FigItemProps } from "../../types";
import addOneFigToCart from "../../functions/addOneFigToCart";
import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";

const FigItemCover = styled.img`
  height: 280px;
  width: 280px;
  border-radius: 20px;
  object-fit: cover;
  # modify the [alt] attribute to a bold font weight
  font-weight: 600;
`;

const FigItemLi = styled.li`
  margin: 10px;
  padding: 10px;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  text-transform: capitalize;
  position: relative;
  background-color: maroon;
  border-radius: 20px;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
`;

const FigItemPrice = styled.div`
  position: absolute;
  border-radius: 20px 20px 20px 0;
  background-color: maroon;
  color: WhiteSmoke;
  padding: 15px;
  right: 10px;
  top: 9px;
  font-weight: 500;
  width: 22px;
`;

const AddToCart = styled.div`
  position: absolute;
  border-radius: 0 20px 20px 20px;
  background-color: maroon;
  padding: 10px;
  color: WhiteSmoke;
  right: 10px;
  bottom: 50px;
  font-weight: 500;
`;
const FigTitle = styled.p`
  font-weight: 600;
  text-align: center;
  padding: 10px;
  margin: auto;
`;

function FigItem({ fig, cart, updateCart }: FigItemProps) {
  return (
    <FigItemLi>
      <FigItemPrice>{fig.price}€</FigItemPrice>
      <AddToCart>
        <IconButton
          color="inherit"
          size="small"
          aria-label="add to shopping cart"
          onClick={() =>
            addOneFigToCart({
              fig: { name: fig.name, price: fig.price, quantity: 0 },
              cart,
              updateCart,
            })
          }
        >
          <AddShoppingCartIcon fontSize="small" />
        </IconButton>
      </AddToCart>
      <FigItemCover src={fig.cover} alt={`${fig.name} cover`} />
      <FigTitle>{fig.name}</FigTitle>
      {/* <div>
        <CareScale careType="size" scaleValue={fig.size} />
        <CareScale careType="quality" scaleValue={fig.quality} />
      </div> */}
    </FigItemLi>
  );
}

export default FigItem;
