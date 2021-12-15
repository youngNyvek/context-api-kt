import React from "react";
import { Header, Button, Badge, SiteTitle } from "../../../styles/layout";
import { ShoppingCart } from "react-feather";
import { useBuyContext } from "../../../contexts/BuyContext";

const Layout = () => {
  const { selectedItensCount } = useBuyContext();
  return (
    <>
      <Header>
        <SiteTitle>
          Context <span>Site</span>
        </SiteTitle>
        <Button>
          <ShoppingCart size={25} color="#e1306c" />
          <Badge>{selectedItensCount}</Badge>
        </Button>
      </Header>
    </>
  );
};

export default Layout;
