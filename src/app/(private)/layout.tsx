"use client";
import Header from "@/components/ui/Header";
import Navbar from "@/components/Navbar/Navbar";

import Footer from "@/components/ui/Footer";
import dynamic from "next/dynamic";
import React, { useEffect, useState } from "react";
import { Drawer, Layout, Menu } from "antd";
import SideBarDashBoard from "@/components/Navbar/SideBarDashBoard";
import { getUserInfo, isLoggedIn } from "@/utils/local.storeage";
import { useRouter } from "next/navigation";
import DashNavBar from "@/components/Navbar/DashNavBar";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const PrivateLayout = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();
    const screens = useBreakpoint();
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
    return (
        <div>
            {/* <Header /> */}
            <Navbar></Navbar>
            <section style={{ minHeight: "100vh", margin: "auto", padding: "2vh 5vw", }}>{children}</section>
            <Footer />
        </div>
    );
};

export default PrivateLayout;
