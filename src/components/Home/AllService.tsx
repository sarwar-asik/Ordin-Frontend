"use client";

import SingleService from "@/components/ui/SingleService";
import React from "react";
import { Button, Row } from "antd";

const AllService = ({ data }: { data: any }) => {
  return (
    <div className=" text-center mt-[8vh] pt-3 rounded-sm ">
      <Row align="middle" justify="start" gutter={[24, 18]}>
        {data?.map((product: any, i: number) => {
          return <SingleService key={i} product={product} />;
        })}
      </Row>
      {data?.length > 10 && (
        <Button href="/services" type="primary" block className="mt-7" shape="circle">
          See All{" "}
        </Button>
      )}
    </div>
  );
};

export default AllService;
