"use client";

import React, { useState } from "react";
import { Button, Input, Tabs } from "antd";
import AvailableService from "./AvailableService";
import UpcomingService from "./UpcomingService";
import AllService from "./AllService";
import { ReloadOutlined, RestFilled } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";
import { useServicesQuery } from "@/redux/api/serviceApi";
import LoadingData from "../ui/Loader/LoadingData";

const { TabPane } = Tabs;

const ServiceTabs = () => {
  const [activeTabKey, setActiveTabKey] = useState("0");

  const handleTabClick = (key: any) => {
    setActiveTabKey(key);
    // console.log(key);
  };

  const ServiceTabStyle = {
    padding: "8px 16px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background-color 0.2s",
    backgroundColor: "#f0f0f0",
  };

  const activeTabStyle = {
    backgroundColor: "#4BB4B4",
    color: "white",
  };

  ////! data Query

  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  // console.log(query,"quer-2");

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 200,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  // console.log(query,"quer-2");
  const { data, isLoading } = useServicesQuery({ ...query });
  // console.log(data);

  const OperationsSlot: Record<"right" | "left", React.ReactNode> = {
    left: (
      <Input
        type="text"
        size="large"
        placeholder="Search Interior by title,price.."
        style={{
          width: "60%",
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    ),
    right: (
      <Button onClick={resetFilters}>
        <ReloadOutlined />
      </Button>
    ),
  };
  // console.log(activeTabKey);

  return (
    <div className=" bg-secondary py-5 rounded-md px-1">
      <section className="text-center">
        <h1 className=" text-[2.3rem] font-serif my-3">
          Our Interior Package
        </h1>
        <p className="mt-3 font-medium font-sans">
          Best interior service of our . We provide the services in flexible
          time with best demandable design. <br /> Here service of our
          available,upcoming Service interior.
        </p>
      </section>
      {isLoading && <LoadingData />}
      
      <Tabs
        style={{ marginBlock: "3rem" }}
        activeKey={activeTabKey}
        onChange={handleTabClick}
        // type="line"
        // type="editable-card"
        tabBarExtraContent={OperationsSlot}
        centered
        destroyInactiveTabPane
        // color="blue"
      >
        <TabPane
        
          tab={
            <span
              className={`${
                activeTabKey === "0" ? "text-white  bg-primary py-3 px-2 " : ""
              }`}
            >
              All Interior
            </span>
          }
          key="0"

          // className={`bg-primary`}

          // style={activeTabKey === "1" ? activeTabStyle : ServiceTabStyle}
        >
          <AllService data={data?.services}></AllService>
        </TabPane>
        <TabPane
          tab={
            <span
              className={`${
                activeTabKey === "1" ? "text-white  bg-primary py-3 px-2 " : ""
              }`}
            >
              Available Interior
            </span>
          }
          key="1"
          // style={activeTabKey === "1" ? activeTabStyle : ServiceTabStyle}
        >
          <AvailableService data={data?.services}></AvailableService>
        </TabPane>
        <TabPane
          tab={
            <span
              className={`${
                activeTabKey === "2" ? "text-white  bg-primary py-3 px-2 " : "d"
              }`}
            >
              Upcoming Interior
            </span>
          }
          key="2"
          // style={activeTabKey === "2" ? activeTabStyle : ServiceTabStyle}
        >
          <UpcomingService data={data?.services}></UpcomingService>
        </TabPane>
      </Tabs>
    </div>
  );
};

export default ServiceTabs;
