"use client";

import React, { useState } from "react";
import { Tabs } from "antd";
import AvailableService from "./AvailableService";
import UpcomingService from "./UpcomingService";
import AllService from "./AllService";

const { TabPane } = Tabs;

const ServiceTabs = () => {
  const [activeTabKey, setActiveTabKey] = useState("1");

  const handleTabClick = (key: any) => {
    setActiveTabKey(key);
    console.log(key);
  };

  const ServiceTabStyle = {
    padding: "8px 16px", // Adjust padding as needed
    border: "1px solid #ccc", // Smart border style
    borderRadius: "5px", // Rounded corners
    cursor: "pointer",
    transition: "background-color 0.2s", // Smooth background color transition
    backgroundColor: "#f0f0f0", // Default tab background color
  };

  const activeTabStyle = {
    backgroundColor: "#4BB4B4", // Colorful background for the active tab
    color: "white", // Text color for the active tab
  };

  return (
    <div className="mt-[10rem] bg-secondary py-5 rounded-md px-1">
      <section className="">
        <h1 className=" text-[2.3rem] font-serif my-3">
          Our Interior Services
        </h1>
        <p className="mt-3 font-medium font-sans">
          Best interior service of our . We provide the services in flexible
          time with best demandfull desing.Here upcoming interior service of our
          best Service .
        </p>
      </section>
      <Tabs
        style={{ margin: "3rem 0" }}
        activeKey={activeTabKey}
        onChange={handleTabClick}
        type="card"
        centered
      >
        <TabPane
          tab="All Interior"
          key="0"
          
          // style={activeTabKey === "1" ? activeTabStyle : ServiceTabStyle}
        >
          <AllService></AllService>
        </TabPane>
        <TabPane
          tab="Available Interior"
          key="1"
          // style={activeTabKey === "1" ? activeTabStyle : ServiceTabStyle}
        >
          <AvailableService></AvailableService>
        </TabPane>
        <TabPane
          tab="UpComing Interior"
          key="2"
          // style={activeTabKey === "2" ? activeTabStyle : ServiceTabStyle}
        >
          <UpcomingService></UpcomingService>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;
