import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";
import addOneFigToCart from "../../functions/addOneFigToCart";
import { ChangeCartProps, CartType } from "../../types";

function CartItemButtons({ cart, updateCart, fig }: ChangeCartProps) {
  const deleteFigFromCart = (fig: CartType) => {
    const cartWithoutDeletedFig = cart.filter(
      (cartElt) => fig.name !== cartElt.name
    );
    updateCart([...cartWithoutDeletedFig]);
  };

  const removeOneFigFromCart = (fig: CartType) => {
    const cartWithoutFig = cart.filter((cartElt) => fig.name !== cartElt.name);
    const figToRemoveQuantity = cart.find(
      (cartElt) => fig.name === cartElt.name
    );
    if (figToRemoveQuantity && figToRemoveQuantity.quantity !== 0) {
      const modifiedCart = [
        ...cartWithoutFig,
        {
          name: figToRemoveQuantity.name,
          price: figToRemoveQuantity.price,
          quantity: figToRemoveQuantity.quantity - 1,
        },
        // tri par ordre alphabétique
      ].sort((a, b) => a.name.localeCompare(b.name));
      // MaJ du panier
      updateCart(modifiedCart);
    }
  };

  return (
    <div>
      <IconButton
        color="inherit"
        size="small"
        aria-label="add one to shopping cart"
        sx={{ "&:hover": { backgroundColor: "#4d1212" } }}
        onClick={() => addOneFigToCart({ cart, updateCart, fig })}
      >
        <AddShoppingCartIcon fontSize="small" />
      </IconButton>
      <IconButton
        color="inherit"
        size="small"
        aria-label="remove from shopping cart"
        sx={{ "&:hover": { backgroundColor: "#4d1212" } }}
        onClick={() => removeOneFigFromCart(fig)}
      >
        <ShoppingCartCheckoutIcon fontSize="small" />
      </IconButton>
      <IconButton
        aria-label="delete"
        size="small"
        sx={{ "&:hover": { backgroundColor: "#4d1212" } }}
        onClick={() => deleteFigFromCart(fig)}
        color="inherit"
      >
        <DeleteIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

export default CartItemButtons;
