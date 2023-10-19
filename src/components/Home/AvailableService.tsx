"use client";

import SingleService from "@/components/ui/SingleService";

import { useServicesQuery } from "@/redux/api/serviceApi";

import { Row } from "antd";

import React from "react";

const AvailableService = () => {
  const { data, isLoading } = useServicesQuery({ page: 1, limit: 20 });
  // console.log(data);

  return (
    <div
    className=" mt-[8vh] pt-3 rounded-sm"
   
    >
      <section className="mb-5 ">
        <h1 className=" text-[2.3rem] font-serif">Our Available Services</h1>
        <p className="mt-3 font-medium font-sans">Here are some available interior service of our best Service. We provide the services in <br/> flexible time with best demandfull desing.Here upcoming interior service of our best Service .</p>
      </section>
      {isLoading && (
        <>
          <h2 className="font-mono">Loading services...</h2>
        </>
      )}

      <Row align="middle" justify="center" gutter={[24, 18]}>
        {data?.services?.map((product: any, i: number) => {
          return <SingleService key={i} product={product} />;
        })}
      </Row>
    </div>
  );
};

export default AvailableService;
