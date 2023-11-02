"use client";

import SingleService from "@/components/ui/SingleService";

import React from "react";

import { Row } from "antd";

const UpcomingService = ({ data }: { data: any }) => {
  return (
    <div className=" mt-[8vh] pt-3 rounded-sm">
      <Row align="middle" justify="start" gutter={[24, 18]}>
        {data
          ?.filter((product: any) => product.status === "upcoming")
          ?.map((product: any, i: number) => {
            return <SingleService key={i} product={product} />;
          })}
      </Row>
    </div>
  );
};

export default UpcomingService;
