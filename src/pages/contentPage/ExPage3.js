import React from "react";
import { Layout, Button } from "antd";
const { Content } = Layout;

const ExPage3 = () => {
  return (
    <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
      <div style={{ padding: 24, background: "#555", textAlign: "center" }}>
        <Button type="primary">Ex3 페이지에 온 걸 환영해!!</Button>
      </div>
    </Content>
  );
};

export default ExPage3;
