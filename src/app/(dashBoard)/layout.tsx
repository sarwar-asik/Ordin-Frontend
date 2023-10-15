"use client";
import dynamic from "next/dynamic";
import React, { useEffect } from "react";

import { Layout } from "antd";
import SideBarDashBoard from "@/components/ui/SideBarDashBoard";
import { isLoggedIn } from "@/utils/local.storeage";
import { useRouter } from "next/navigation";
import DashNavBar from "@/components/ui/DashNavBar";

const { Header, Content } = Layout;

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {

  const router = useRouter()

  const userLoggedIn = isLoggedIn();
  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
  }, [router, userLoggedIn]);


  return (
   <>
   <DashNavBar/>
    <Layout hasSider style={{ minHeight: "100vh",background:"" }}>
    

    <SideBarDashBoard />


    <Layout>
      {/* <Header /> */}
      <Content style={{ margin: "0 16px" }}>{children}</Content>
    </Layout>
  </Layout>
   </>
  );
};

export default dynamic(() => Promise.resolve(DashBoardLayout), {
  ssr: false,
});
