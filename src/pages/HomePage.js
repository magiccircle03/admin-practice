import React from "react";
import { Layout, Button } from "antd";

import AppFooter from "./AppFooter";
import SideNavBar from "./SideNavBar";
import { menuItem } from "./PageData";

const { Content } = Layout;

function App() {
  return (
    <Layout>
      <SideNavBar menuItem={menuItem} />
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#555", textAlign: "center" }}>
            <Button type="primary">안농여긴홈페이지</Button>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default App;
