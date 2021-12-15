import styled from "styled-components";

export const ItemsContainer = styled.div`
  max-width: 900px;
  width: 100%;
  margin: 100px auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
`;

export const ItemBox = styled.div`
  background: #6441c1;
  padding: 10px 0;
  border-radius: 11px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  max-width: 400px;
  height: 400px;
  p {
    color: white;
    text-align: center;
    font-size: 16px;
  }

  img {
    width: 400px;
    height: 300px;
    object-fit: cover;
  }
`;

export const AddButton = styled.button`
  border: 0;
  padding: 8px;
  background: #e1306c;
  color: white;
  border-radius: 6px;
  width: 200px;
  font-weight: 700;
  cursor: pointer;
  transition: 200ms;

  :hover {
    background: #a50d41;
  }
`;

export const RemoveButton = styled.button`
  border: 0;
  padding: 8px;
  background: #f6f6f6;
  color: black;
  border-radius: 6px;
  width: 200px;
  font-weight: 700;
  cursor: pointer;
  transition: 200ms;

  :hover {
    background: #666;
  }
`;
