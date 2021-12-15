import React from "react";
import { Header, Button, Badge, SiteTitle } from "../../../styles/layout";
import { ShoppingCart } from "react-feather";

const Layout = () => {
  const buyCount = 1;
  return (
    <>
      <Header>
        <SiteTitle>
          Context <span>Site</span>
        </SiteTitle>
        <Button>
          <ShoppingCart size={25} color="#e1306c" />
          <Badge>{buyCount}</Badge>
        </Button>
      </Header>
    </>
  );
};

export default Layout;
