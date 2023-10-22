"use client";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Button, Drawer, Layout, Menu } from "antd";
import SideBarDashBoard from "@/components/Navbar/SideBarDashBoard";
import { getUserInfo, isLoggedIn } from "@/utils/local.storeage";
import { useRouter } from "next/navigation";
import DashNavBar from "@/components/Navbar/DashNavBar";
import Footer from "@/components/ui/Footer";
import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { sidebarItems } from "@/components/constant/SidebarItems";

const {  Content } = Layout;

const DashBoardLayout = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter(); 
  const [collapsed, setCollapsed] = useState(false);
  const userLoggedIn = isLoggedIn();
  const userInfo = getUserInfo() as any;

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
  }, [router, userLoggedIn]);

  const [isSmallDevice, setIsSmallDevice] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsSmallDevice(window.innerWidth < 768);
    }

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // console.log("isSmallDevice:", isSmallDevice, "collapsed:", collapsed);

  return (
    <>
      <Layout hasSider>
        {isSmallDevice ? (
          <Drawer
            title={`${userInfo?.role} Dash`}
            placement="left"
            onClose={() => setCollapsed(false)}
            open={collapsed}
          >
            <Menu
              className="bg-secondary"
              defaultSelectedKeys={["1"]}
              mode="inline"
              items={sidebarItems(userInfo?.role)}
            />
          </Drawer>
        ) : (
          <section>
            <SideBarDashBoard
              collapsed={collapsed}
              setCollapsed={setCollapsed}
            />
          </section>
        )}

        <Layout style={{ overflow: "hidden" }}>
          <DashNavBar collapsed={collapsed} setCollapsed={setCollapsed} />
          <Content>{children}</Content>
          {/* <Footer></Footer> */}
        </Layout>
      </Layout>
    </>
  );
};

export default dynamic(() => Promise.resolve(DashBoardLayout), {
  ssr: false,
});
