import React from "react";
import AppFooter from "./AppFooter";
import { Layout, Button } from "antd";
const { Content } = Layout;

function LoginPage() {
  return (
    <Layout>
      <Layout style={{ marginLeft: 200 }}>
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <div style={{ padding: 24, background: "#555", textAlign: "center" }}>
            <Button type="primary">로그인페이지가 될거야!</Button>
          </div>
        </Content>
        <AppFooter />
      </Layout>
    </Layout>
  );
}

export default LoginPage;
