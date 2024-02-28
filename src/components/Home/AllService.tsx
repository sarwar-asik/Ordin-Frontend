"use client";

import SingleService from "@/components/ui/SingleService";
import React from "react";
import { Button, Row } from "antd";
import Link from "next/link";

const AllService = ({ data }: { data: any }) => {
  return (
    <div className=" text-center mt-[8vh] pt-3 rounded-sm ">
      <Row align="middle" justify="start" gutter={[24, 18]}>
        {data?.map((product: any, i: number) => {
          return <SingleService key={i} product={product} />;
        })}
      </Row>
      {data?.length > 4 && (
        <Link href={`/services`} className="px-4 bg-gray-900 flex justify-between items-center w-full lg:w-[8rem] h-14 mx-auto  text-white hover:bg-gray-700">
          <p className="text-xl font-medium leading-5 text-nowrap ">See All</p>
          <div className="bg-red-">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.66663 16H25.3333" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 21.3333L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M20 10.6667L25.3333 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </Link>
      )}
    </div>
  );
};

export default AllService;
