export type FigType = {
  name: string;
  category: string;
  id: string;
  quality: number;
  size: number;
  cover: string;
  price: number;
};

export type CartType = {
  name: string;
  quantity: number;
  price: number;
};
export type CartProps = {
  cart: CartType[];
  updateCart: (newCartValue: CartType[]) => void;
};

export type ChangeCartProps = CartProps & {
  fig: CartType;
};

export type FigItemProps = CartProps & {
  fig: FigType;
};

export type CategoryProps = {
  activeCategories: string[];
  setActiveCategories: (newCategories: string[]) => void;
};
