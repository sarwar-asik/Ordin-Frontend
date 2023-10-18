"use client";

import SingleService from "@/components/ui/SingleService";

import { useServicesQuery } from "@/redux/api/serviceApi";

import { Row } from "antd";

import React from "react";

const ServicePage = () => {
  const { data, isLoading } = useServicesQuery({ page: 1, limit: 20 });
  // console.log(data);

  return (
    <div>
      <h1>Services Page</h1>

      <Row align="middle" justify="center" gutter={16}>
        {data?.services?.map((product: any, i: number) => {
         
          return <SingleService key={i} product={product} />;
        })}
      </Row>
    </div>
  );
};

export default ServicePage;
