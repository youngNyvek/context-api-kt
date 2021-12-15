import React, { useContext } from "react";
import { BuyContext, useBuyContext } from "../../../contexts/BuyContext";
import { ItemBox, AddButton, RemoveButton } from "../../../styles/buyableItems";

const BuyableItems = ({ id, url, text }) => {
  // const { selectedItens, setSelectedItens } = useBuyContext();

  const { selectedItens, setSelectedItens } = useContext(BuyContext);

  const isAlredySelected = selectedItens.findIndex(i => i.id === id);

  const removeItem = () => {
    const spreadItens = [...selectedItens];
    spreadItens.splice(isAlredySelected, 1);
    setSelectedItens(spreadItens);
  };

  return (
    <ItemBox key={id}>
      <img src={url} alt={text} />
      <p>{text.toLocaleUpperCase()}</p>
      {isAlredySelected === -1 ? (
        <AddButton
          onClick={() =>
            setSelectedItens([...selectedItens, { id, url, text }])
          }
        >
          + Adicionar no carrinho
        </AddButton>
      ) : (
        <RemoveButton onClick={removeItem}>- Remover no carrinho</RemoveButton>
      )}
    </ItemBox>
  );
};

export default BuyableItems;
