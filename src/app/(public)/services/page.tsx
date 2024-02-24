"use client";

import LoaderService from "@/components/ui/Loader/LoaderService";
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
      <section className="my-1 mb-[3rem] pb-3 ">
        <h1 className=" text-[2.3rem] font-serif uppercase text-[#4d4c4c]">
          Our All Interior Packages{" "}
        </h1>
      </section>
      {isLoading && <LoaderService />}

      <Row align="middle" justify="start" gutter={[24, 18]}>
        {data?.services?.map((product: any, i: number) => {
          return <SingleService key={i} product={product} />;
        })}
      </Row>
    </div>
  );
};

export default ServicesRoutes;
