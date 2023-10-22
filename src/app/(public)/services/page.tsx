"use client";

import LoadingData from "@/components/ui/Loader/LoadingData";
import SingleService from "@/components/ui/SingleService";

import { useServicesQuery } from "@/redux/api/serviceApi";

import { Row } from "antd";

import React from "react";

const ServicesRoutes = () => {
  const { data, isLoading } = useServicesQuery({ page: 1, limit: 20 });
  // console.log(data);

  return (
    <div className=" mt-[8vh] pt-3 rounded-sm">
      {isLoading && (
        <>
          <LoadingData/>
        </>
      )}

      <section className="my-7 ">
        <h1 className=" text-[2.3rem] font-serif">Our All Category Services</h1>
      </section>

      <Row align="middle" justify="start" gutter={[24, 18]}>
        {data?.services?.map((product: any, i: number) => {
          return <SingleService key={i} product={product} />;
        })}
      </Row>
    </div>
  );
};

export default ServicesRoutes;
