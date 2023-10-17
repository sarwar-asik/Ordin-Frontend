"use client";
import React, { useState } from "react";
import type { MenuProps } from "antd";
import { Layout, Menu } from "antd";

import { getUserInfo } from "@/utils/local.storeage";
import { sidebarItems } from "../constant/SidebarItems";

const { Sider } = Layout;

const SideBarDashBoard = () => {


  const [collapsed, setCollapsed] = useState(false);

const {role} = getUserInfo() as any
// console.log(role,"role of user");

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      width={250}
      
      style={{
        overflow: "auto",
        height: "110vh",
        position: "sticky",
        zIndex:40,
        left: 0,
        top: 0,
        bottom: 0,
        // background:"",
      }}
    >
      <div
        //  className="demo-logo-vertical"
        style={{
          color: "white",
          fontSize: "1.2em",
          textAlign: "center",
          fontFamily: "serif",
          marginBottom: "1rem",
          marginTop: "10px",
        }}
      >
      DashBoard
      </div>

      <Menu
        theme="dark"
        defaultSelectedKeys={["1"]}
        mode="inline"
        items={sidebarItems(role)}
      />
    </Sider>
  );
};

export default SideBarDashBoard;
