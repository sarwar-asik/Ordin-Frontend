"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";

import { Button, Layout } from "antd";
import SideBarDashBoard from "@/components/Navbar/SideBarDashBoard";
import { isLoggedIn } from "@/utils/local.storeage";
import { useRouter } from "next/navigation";
import DashNavBar from "@/components/Navbar/DashNavBar";
import Footer from "@/components/ui/Footer";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";

const { Header, Content } = Layout;

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();

  const [collapsed, setCollapsed] = useState(true);

  const userLoggedIn = isLoggedIn();
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
  }, [router, userLoggedIn]);

  return (
    <>
      {/* <DashNavBar /> */}
      <Layout
        hasSider
        className="bg-red-300"
        //  style={{ minHeight: "100vh",background:"" }}
      >
        <SideBarDashBoard collapsed={collapsed} setCollapsed={setCollapsed} />

        <Layout
          style={{
            overflowY: "auto",
          }}
          // className=" overflow-y-auto"
        >
          <DashNavBar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content
          // style={{ margin: "0 16px" }}
          >
            {children}
          </Content>
        </Layout>

        {/* <Footer></Footer> */}
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(DashBoardLayout), {
  ssr: false,
});
