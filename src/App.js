import React from "react";
import BuyableItems from "./components/BuyableItems/index";
import Layout from "./components/Layout/index";
import GlobalStyleComponent from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyleComponent />
      <Layout />
      <BuyableItems />
    </>
  );
};

export default App;
