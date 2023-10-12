"use client";

import React from "react";
import StyledComponentsRegistry from "./AntdRegistry";
import { store } from "@/app/redux/store";
import { Provider } from "react-redux";
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
    </Provider>
  );
};

export default Providers;
