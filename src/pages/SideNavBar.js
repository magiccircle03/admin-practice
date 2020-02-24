import React from "react";
import { Layout, Menu, Icon } from "antd";
import { withRouter } from "react-router-dom";

const { Sider } = Layout;

const SideNavBar = ({ menuItem, ...props }) => {
  const handleNavClick = ({ key }) => {
    props.history.push(key);
  };
  const goHome = () => {
    props.history.push(`/`);
  };

  return (
    <Sider
      style={{
        overflow: "auto",
        height: "100vh",
        position: "fixed",
        left: 0
      }}
    >
      <div
        style={{
          height: "32px",
          background: "rgba(255, 255, 255, 0.2)",
          margin: "16px",
          cursor: "pointer"
        }}
        onClick={goHome}
      >
        로고자리
      </div>
      <Menu theme="dark" mode="inline">
        {menuItem &&
          menuItem.map(({ pathTo, icon, text }) => {
            return (
              <Menu.Item key={pathTo} onClick={handleNavClick}>
                <Icon type={icon} />
                <span className="nav-text">{text}</span>
              </Menu.Item>
            );
          })}
      </Menu>
    </Sider>
  );
};

export default withRouter(SideNavBar);
