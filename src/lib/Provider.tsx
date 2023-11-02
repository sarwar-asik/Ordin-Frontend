"use client";

import React from "react";
import StyledComponentsRegistry from "./AntdRegistry";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ConfigProvider } from "antd";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>
        <ConfigProvider
          theme={{
            token: {
              // Seed Token
              // colorPrimary: "#00b96b",
              colorPrimary: "#4BB4B4",
              // borderRadius: 2,


            },
          }}
        >
          {children}
        </ConfigProvider>
      </StyledComponentsRegistry>
      ;
    </Provider>
  );
};

export default Providers;
