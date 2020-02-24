import React from "react";

import { Layout } from "antd";
import SideNavBar from "./SideNavBar";
import AppFooter from "./AppFooter";
const { Content } = Layout;

const NotFound = () => {
  return (
    <Layout>
      <SideNavBar />
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#555", textAlign: "center" }}>
            아쉽게도 NotFound에요
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
};

export default NotFound;
