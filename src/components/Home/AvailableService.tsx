"use client";

import SingleService from "@/components/ui/SingleService";

import { useServicesQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import React, { useState } from "react";

import { Input, Row } from "antd";

const AvailableService = ({ data }: { data: any }) => {
  // console.log(data);

  return (
    <div className=" mt-[8vh] pt-3 rounded-sm">
      <Row align="middle" justify="start" gutter={[24, 18]}>
        {data
          ?.filter((product: any) => product.status === "available")
          ?.map((product: any, i: number) => {
            return <SingleService key={i} product={product} />;
          })}
      </Row>
    </div>
  );
};

export default AvailableService;
