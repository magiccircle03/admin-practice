import React from "react";
import { Layout, Button } from "antd";
import SideNavBar from "./SideNavBar";
import AppFooter from "./AppFooter";
const { Content } = Layout;

function TestPage() {
  return (
    <Layout>
      <SideNavBar />
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#555", textAlign: "center" }}>
            <Button type="primary">
              여긴 비밀의 테스트 페이지! 어떻게 들어왔담!?
            </Button>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default TestPage;
