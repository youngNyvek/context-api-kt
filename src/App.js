import React from "react";
import BuyableItems from "./components/BuyableItems/index";
import Layout from "./components/Layout/index";
import BuyProvider from "./contexts/BuyContext";
import GlobalStyleComponent from "./styles/global";

const App = () => {
  return (
    <>
      <GlobalStyleComponent />
      <BuyProvider>
        <Layout />
        <BuyableItems />
      </BuyProvider>
    </>
  );
};

export default App;
