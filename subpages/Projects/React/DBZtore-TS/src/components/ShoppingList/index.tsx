import { figList } from "../../datas/figlist";
import styled from "styled-components";
import FigItem from "../FigItem";
import { CartProps } from "../../types";
import Category from "../Categories";
import { useState } from "react";

const FigList = styled.ul`
  list-style-type: none;
  padding: 32px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const ShoppingListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

function ShoppingList({ cart, updateCart }: CartProps) {
  const [activeCategories, setActiveCategories] = useState<string[]>([]);

  const filteredFigs =
    activeCategories.length === 0
      ? figList
      : figList.filter((fig) => activeCategories.includes(fig.category));

  return (
    <ShoppingListDiv>
      <Category
        activeCategories={activeCategories}
        setActiveCategories={setActiveCategories}
      />
      <FigList>
        {filteredFigs.map((fig) => (
          <FigItem key={fig.id} fig={fig} cart={cart} updateCart={updateCart} />
        ))}
      </FigList>
    </ShoppingListDiv>
  );
}

export default ShoppingList;
