import React, { useState } from "react";
import { Icon, Badge, Drawer, Row, Col } from "antd";

import "./Cart.css";

const Cart = () => {
  const [visible, setVisible] = useState(false);

  /**
   * Set visible to true to show the cart drawer.
   *
   */
  const showCart = () => {
    setVisible(true);
  };

  /**
   * Set visible to false to hide the cart drawer.
   *
   */
  const onClose = () => {
    setVisible(false);
  };

  /* The title for the cart */
  const drawerTitle = (
    <Row type="flex" justify="center" className="drawer-title-container">
      <Col span={3}>
        <Badge count={7} style={{ backgroundColor: "#8F3AE6" }}>
          <Icon type="shopping-cart" className="drawer-title-icon" />
        </Badge>
      </Col>

      <Col span={4}>
        <p className="drawer-title">Cart</p>
      </Col>
    </Row>
  );

  return (
    <>
      <Badge count={7} style={{ backgroundColor: "#8F3AE6" }}>
        <Icon type="shopping-cart" className="cart-icon" onClick={showCart} />
      </Badge>

      <Drawer
        closable
        placement="right"
        width={520}
        title={drawerTitle}
        onClose={onClose}
        visible={visible}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default Cart;
