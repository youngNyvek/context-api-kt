import styled from "styled-components";

export const Header = styled.div`
  background: #e1306c;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0 18px;
  position: fixed;
  top: 0;
  width: 100%;
`;

export const Button = styled.div`
  background-color: #fff;
  padding: 5px;
  border-radius: 10%;
  position: relative;
  cursor: pointer;

  :hover {
    background-color: #f6f6f6;
  }
`;

export const Badge = styled.div`
  color: white;
  text-align: center;
  background-color: #6441c1;
  right: -9px;
  min-width: 20px;
  padding: 2px;
  border-radius: 100%;
  top: -6px;
  position: absolute;
  font-weight: 700;
`;

export const SiteTitle = styled.h1`
  color: #fff;
  font-weight: 400;
  font-size: 40px;
  span {
    font-weight: 200;
  }
`;
