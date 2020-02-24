import React from "react";

import { Switch, Route } from "react-router-dom";
import { Layout } from "antd";
import SideNavBar from "./SideNavBar";
import AppFooter from "./AppFooter";
import { menuItem } from "./PageData";

const MainPage = () => {
  const { component } = menuItem.find(item => {
    // eslint-disable-next-line no-restricted-globals
    return location.pathname === item.pathTo;
  });

  return (
    <Layout>
      <SideNavBar menuItem={menuItem} />
      <Layout style={{ marginLeft: 200 }}>
        <Switch>
          <Route component={component} />
        </Switch>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default MainPage;
