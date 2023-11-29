"use client";
import React from "react";
import { DownOutlined } from "@ant-design/icons";

import { Dropdown, Space } from "antd";
// ! start work
const DropDownMenuUI = ({ name, items }: { name: string; items: any }) => (
  <Dropdown menu={{ items }} placement="bottom">
    <a onClick={(e) => e.preventDefault()}>
      <Space>
        {name}
        <DownOutlined />
      </Space>
    </a>
  </Dropdown>
);

export default DropDownMenuUI;
