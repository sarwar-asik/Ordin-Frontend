import React from "react";

import Link from "next/link";
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Menu,
  MenuProps,
  Space,
  message,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { removeUserInfo } from "@/utils/local.storeage";
import { authKey } from "@/constant/storageKey";
const { Header } = Layout;

const DashNavBar = () => {
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: <Link href="/profile">profile</Link>,
    },
    {
      key: "2",
      label: (
        <Button
          onClick={() => {
            removeUserInfo(authKey);
            message.error("Logout Successfully");
          }}
          type="primary"
          danger
        >
          Logout
        </Button>
      ),
    },
  ];
  return (
    <Header className="bg-white text-black shadow-xl flex justify-between">
      <div className="flex items-center gap-2">
        <Link
          href="/"
          className="demo-logo font-extrabold font-serif mt-1 text-[2rem] text-primary "
        >
          Ordin
        </Link>
      </div>
      <Menu mode="horizontal" className="hidden lg:flex" disabledOverflow>
        <Menu.Item key="item-1">
          <Dropdown menu={{ items }} placement="bottomLeft" arrow>
            <Space wrap size={16}>
              <Avatar size="large" icon={<UserOutlined />} />
            </Space>
          </Dropdown>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default DashNavBar;
