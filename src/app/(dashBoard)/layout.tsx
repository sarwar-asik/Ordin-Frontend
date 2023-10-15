"use client";
import dynamic from "next/dynamic";
import React, { useState } from "react";
import {
  DesktopOutlined,
  FileOutlined,
  PieChartOutlined,
  TeamOutlined,
  UserOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu, theme } from "antd";
import SideBarDashBoard from "@/components/ui/SideBarDashBoard";

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <SideBarDashBoard />
      <Layout>
        <Header />
        <Content style={{ margin: "0 16px" }}>{children}</Content>
      </Layout>
    </Layout>
  );
};

export default dynamic(() => Promise.resolve(DashBoardLayout), {
  ssr: false,
});
