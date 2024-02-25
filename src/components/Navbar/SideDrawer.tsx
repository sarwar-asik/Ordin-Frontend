"use client";
import React, { useState } from "react";
import { Button, Drawer, Menu, Radio, Space } from "antd";
import type { DrawerProps } from "antd/es/drawer";
import type { RadioChangeEvent } from "antd/es/radio";
import {
  MenuUnfoldOutlined,
  CloseOutlined,
  FileOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import SideBarDashBoard from "./SideBarDashBoard";
import Logo from "../ui/Logo";
import { sidebarItems } from "../constant/SidebarItems";

const SideBar = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  // const onChange = (e: RadioChangeEvent) => {
  //   setPlacement(e.target.value);
  // };

  const onClose = () => {
    setOpen(false);
  };

  const [selectedItem, setSelectedItem] = useState<null | any>(null);

  // const handleItemClick = (item: any) => {
  //   setSelectedItem(item);
  //   onClose();
  // };

  return (
    <>
      <Space className="text-2xl">
        {!open ? (
          <MenuUnfoldOutlined onClick={showDrawer} />
        ) : (
          <CloseOutlined />
        )}
      </Space>
      <Drawer
        className="bg-transparent backdrop-blur-xl"
        // title="Drawer with extra actions"
        placement={"right"}
        width={300}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button className="bg-transparent backdrop-blur-xl border-none " onClick={onClose}>
              <Logo />
            </Button>
          </Space>
        }
      >
        <Menu
          mode="inline"
          className="bg-transparent backdrop-blur-xl text-white"
          selectedKeys={[selectedItem]}
          style={{ borderRight: "none" }}
          items={sidebarItems("sidebar")}
        />

      </Drawer>
    </>
  );
};

export default SideBar;
