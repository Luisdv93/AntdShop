import React from "react";
import { Layout } from "antd";

import Header from "./components/Header";
import "./App.css";

const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout className="layout">
      <Header />
      <Content className="app-main-container">
        <div className="app-content">Content</div>
      </Content>
      <Footer className="app-footer">
        E-commerce App ©2019 Created by Luis Vilchez
      </Footer>
    </Layout>
  );
};

export default App;
