import React from "react";
import { ItemBox, AddButton } from "../../../styles/buyableItems";

const BuyableItems = ({ id, url, text }) => {
  return (
    <ItemBox key={id}>
      <img src={url} alt={text} />
      <p>{text.toLocaleUpperCase()}</p>

      <AddButton>+ Adicionar no carrinho</AddButton>
    </ItemBox>
  );
};

export default BuyableItems;
