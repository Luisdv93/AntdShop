import React from "react";
import { Layout, Row, Col } from "antd";
import Search from "./Search";
import Cart from "./Cart";

import "./Header.css";

const Header = () => {
  return (
    <Layout.Header className="header-container">
      <Row type="flex" justify="space-between">
        <Col span={4}>
          <p className="logo">AntdShop</p>
        </Col>

        <Col span={8} offset={2}>
          <Search />
        </Col>

        <Col span={6} className="cart-icon-container">
          <Cart />
        </Col>
      </Row>
    </Layout.Header>
  );
};

export default Header;
