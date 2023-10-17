"use client";

import SingleService from "@/components/ui/SingleService";

import { useServicesQuery } from "@/redux/api/serviceApi";

import { Row } from "antd";

import React from "react";

const AvailableService = () => {
  const { data, isLoading } = useServicesQuery({ page: 1, limit: 20 });
  // console.log(data);

  return (
    <div >
      <h1>Our Available Services</h1>
      {isLoading && (
        <>
          <h2>Loading services...</h2>
        </>
      )}

      <Row align="middle" justify="center" gutter={16}>
        {data?.services?.map((product: any, i: number) => {
          return <SingleService key={i} product={product} />;
        })}
      </Row>
    </div>
  );
};

export default AvailableService;
