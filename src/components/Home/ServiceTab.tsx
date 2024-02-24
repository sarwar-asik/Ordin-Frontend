"use client";

import React, { useState } from "react";
import { Button, Input, MenuProps, Tabs, TabsProps } from "antd";
import AvailableService from "./AvailableService";
import UpcomingService from "./UpcomingService";
import AllService from "./AllService";
import { ReloadOutlined, RestFilled } from "@ant-design/icons";
import { useDebounced } from "@/redux/hooks";
import { useServicesQuery } from "@/redux/api/serviceApi";
import LoadingData from "../ui/Loader/LoadingData";
import dynamic from "next/dynamic";
import LoaderService from "../ui/Loader/LoaderService";

const { TabPane } = Tabs;

const ServiceTabs = () => {
  const [activeTabKey, setActiveTabKey] = useState("1");

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
  const [size, setSize] = useState<number>(16);
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

  const activeClass = `text-white font-bold bg-primary mx w-full text-center text-[15px] py-2.5 px-4 rounded-tl-2xl rounded-tr-2xl cursor-pointer`
  // console.log(query,"quer-2");
  const { data, isLoading } = useServicesQuery({ ...query });
  const tabsItems: TabsProps["items"] = [
    {
      label: <p className={` ${activeTabKey === "1" && activeClass} py-2.5 px-4 text-center text-[15px]  font-semibold`}> All Interior</p>,
      key: "1",
      children: <AllService data={data?.services}></AllService>,
    },
    {
      label: <p className={` ${activeTabKey === "2" && activeClass} py-2.5 px-4 text-center text-[15px]  font-semibold`}> Available</p>,
      key: "2",
      children: <AvailableService data={data?.services}></AvailableService>,
    },
    {
      label: <p className={` ${activeTabKey === "3" && activeClass} py-2.5 px-4 text-center text-[15px]  font-semibold`}> Upcoming</p>,
      key: "3",
      children: <UpcomingService data={data?.services}></UpcomingService>,
    },
  ];
  // console.log(data);
  const handleTabClick = (key: any) => {
    setActiveTabKey(key);
    // console.log(key);
  };
  const OperationsSlot: Record<"right" | "left", React.ReactNode> = {
    left: (
      <Input
        type="text"
        size="large"
        placeholder="Search Interior by title,price.."
        className="hidden  lg:flex"
        style={{
          width: "60%",
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />
    ),
    right: (
      <Button className="hidden  lg:flex" onClick={resetFilters}>
        <ReloadOutlined />
      </Button>
    ),
  };

  const servicesData: any = data?.services || []

  return (
    <div className=" bg-secondary text-center py-5 rounded-md px-1">
      <section className="text-center">
        <h1 className=" text-[2.3rem] font-serif uppercase text-[#4d4c4c]">
          Our Interior Package
        </h1>
        <p className="mt-3 font-medium font-sans text-[#5f5d5d]">
          Best interior service of our . We provide the services in flexible
          time with best demandable design. <br /> Here service of our
          available,upcoming Service interior.
        </p>
      </section>

      <section className="flex justify-between lg:hidden  mt-4 mb-2">
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
        <Button onClick={resetFilters}>
          <ReloadOutlined />
        </Button>
      </section>

      <Tabs
        style={{ marginBlock: "1rem" }}
        defaultActiveKey="1"
        activeKey={activeTabKey}
        onChange={handleTabClick}
        type="line"
        // type="editable-card"
        tabBarExtraContent={OperationsSlot}
        // centered
        // destroyInactiveTabPane
        // className="shadow-lg"
        tabBarStyle={{
          // border: "1px solid #4BB4B4",
          borderRadius: "5px",
          padding: "10px 5px",
          // boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        }}
        // color="blue"
        items={tabsItems}
      />
      {(isLoading || servicesData?.length < 1) && <LoaderService />}
    </div>
  );
};

// export default dynamic(() => Promise.resolve(Navbar), {
//   ssr: false,
// });

export default ServiceTabs;
