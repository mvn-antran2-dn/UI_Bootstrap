import React, { useState } from 'react';
import 'antd/dist/antd.min.css';
import './App.css';
import "./assets/scss/styles.scss";
import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  CoffeeOutlined ,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;
function getItem(label, key, icon, children, type) {
  return {
    key,
    icon,
    label,
  };
}
function App() {
  const [collapsed, setCollapsed] = useState(false);
  const items = [
    getItem(<NavLink to="/">Accordion</NavLink>, "/", <CoffeeOutlined />),
    getItem(<NavLink to="/alert">Alert</NavLink>, "/alert", <CoffeeOutlined />),
    getItem(<NavLink to="/badge">Badge</NavLink>, "/badge", <CoffeeOutlined />),
    getItem(<NavLink to="/breadcrumb">Breadcrumb</NavLink>, "/breadcrumb", <CoffeeOutlined />),
    getItem(<NavLink to="/button">Buttons</NavLink>, "/button", <CoffeeOutlined />),
    getItem(<NavLink to="/button-group">Button Group</NavLink>, "/button-group", <CoffeeOutlined />),
    getItem(<NavLink to="/card">Card</NavLink>, "/card", <CoffeeOutlined />),
    getItem(<NavLink to="/close">Close Button</NavLink>, "/close", <CoffeeOutlined />),
    getItem(<NavLink to="/collapse">Collapse</NavLink>, "/collapse", <CoffeeOutlined />),
    getItem(<NavLink to="/dropdowns">Dropdowns</NavLink>, "/dropdowns", <CoffeeOutlined />),
    getItem(<NavLink to="/list-group">List Group</NavLink>, "/list-group", <CoffeeOutlined />),
    getItem(<NavLink to="/modal">Modal</NavLink>, "/modal", <CoffeeOutlined />),
    getItem(<NavLink to="/navs-tabs">Navs & tabs</NavLink>, "/navs-tabs", <CoffeeOutlined />),
    getItem(<NavLink to="/navbar">Navbar</NavLink>, "/navbar", <CoffeeOutlined />),
    getItem(<NavLink to="/offcanvas">Offcanvas</NavLink>, "/offcanvas", <CoffeeOutlined />),
    getItem(<NavLink to="/pagination">Pagination</NavLink>, "/pagination", <CoffeeOutlined />),
    getItem(<NavLink to="/placeholder">Placeholder</NavLink>, "/placeholder", <CoffeeOutlined />),
    getItem(<NavLink to="/popovers">Popovers</NavLink>, "/popovers", <CoffeeOutlined />),
    getItem(<NavLink to="/progress">Progress</NavLink>, "/progress", <CoffeeOutlined />),
    getItem(<NavLink to="/scrollspy">Scrollspy</NavLink>, "/scrollspy", <CoffeeOutlined />),
    getItem(<NavLink to="/spinners">Spinners</NavLink>, "/spinners", <CoffeeOutlined />),
    getItem(<NavLink to="/toasts">Toasts</NavLink>, "/toasts", <CoffeeOutlined />),
    getItem(<NavLink to="/tooltips">Tooltips</NavLink>, "/tooltips", <CoffeeOutlined />),
  ];
  return (
    <Layout>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={items}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          className="site-layout-background"
          style={{
            margin: '24px 16px',
            padding: 24,
            minHeight: 280,
          }}
        >
          <Routes>
              <Route path="*" element={<Home />}></Route>
            </Routes>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
