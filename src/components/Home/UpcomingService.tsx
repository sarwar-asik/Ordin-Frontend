"use client";

import SingleService from "@/components/ui/SingleService";

import { useServicesQuery } from "@/redux/api/serviceApi";

import { Row } from "antd";

import React from "react";

const UpcomingService = () => {
  const { data, isLoading } = useServicesQuery({ page: 1, limit: 20 });
  // console.log(data);

  return (
    <div
    className=" mt-[8vh] pt-3 rounded-sm"
   
    >
    
      {isLoading && (
        <>
          <h2 className="font-mono">Loading services...</h2>
        </>
      )}

      <Row align="middle" justify="center" gutter={[24, 18]}>
        {data?.services?.filter((product: any) => product.status === "upcoming")?.map((product: any, i: number) => {
          return <SingleService key={i} product={product} />;
        })}
      </Row>
    </div>
  );
};

export default UpcomingService;
