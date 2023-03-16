import { CartProps, CartType } from "../types";

type AddFigToCartProps = CartProps & {
  fig: CartType;
};

function addOneFigToCart({ fig, cart, updateCart }: AddFigToCartProps) {
  // trouve la fige à ajouter
  const figToAdd = cart.find((cartElt) => cartElt.name === fig.name);
  // si déjà présente, retire la fige à ajouter du cart intermédiaire
  if (figToAdd) {
    const cartWithoutFigToAdd = cart.filter(
      (cartElt) => cartElt.name !== fig.name
    );
    const modifiedCart = [
      ...cartWithoutFigToAdd,
      {
        name: figToAdd.name,
        quantity: figToAdd.quantity + 1,
        price: figToAdd.price,
      },
    ];
    // tri par ordre alphabétique
    modifiedCart.sort((a, b) => a.name.localeCompare(b.name));
    // ajoute le cart sans la fige + la fige avec la bonne quantité
    updateCart(modifiedCart);
  } else {
    const modifiedCart = [
      ...cart,
      { name: fig.name, price: fig.price, quantity: 1 },
    ];
    // tri par ordre alphabétique
    modifiedCart.sort((a, b) => a.name.localeCompare(b.name));
    // ajoute le cart sans la fige + la fige
    updateCart(modifiedCart);
  }
}

export default addOneFigToCart;
