import React, { useState } from "react";
import { Button, Drawer, Radio, Space } from "antd";
import type { DrawerProps } from "antd/es/drawer";
import type { RadioChangeEvent } from "antd/es/radio";
import { MenuUnfoldOutlined, CloseOutlined } from "@ant-design/icons";
import Link from "next/link";

const SideBar = ({ items }: { items?: any }) => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onChange = (e: RadioChangeEvent) => {
    setPlacement(e.target.value);
  };

  const onClose = () => {
    setOpen(false);
  };

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
        // title="Drawer with extra actions"
        placement={placement}
        width={400}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Close</Button>
          </Space>
        }
      >
        <section className="flex flex-col justify-start gap-5 text-primary font-bold ">
          {items?.map((item: any) => (
            <Link
              key={item?.key}
              href={item?.href}
              onClick={onClose}
              className="py-3 hover:shadow-lg px-1 rounded-lg border-2 border-red-500"
            >
              {item.label}
            </Link>
          ))}
        </section>
      </Drawer>
    </>
  );
};

export default SideBar;
