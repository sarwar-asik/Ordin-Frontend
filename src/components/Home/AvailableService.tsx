"use client";

import SingleService from "@/components/ui/SingleService";

import { useServicesQuery } from "@/redux/api/serviceApi";
import { useDebounced } from "@/redux/hooks";
import React, { useState } from "react";

import { Input, Row } from "antd";

const AvailableService = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  const { data, isLoading } = useServicesQuery({ ...query });
  // console.log(data);

  return (
    <div className=" mt-[8vh] pt-3 rounded-sm">
      {isLoading && (
        <>
          <h2 className="font-mono">Loading services...</h2>
        </>
      )}

      <Input
        type="text"
        size="large"
        placeholder="Search Service"
        style={{
          width: "100%",
          marginBlock:"10px"
        }}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
      />

      <Row align="middle" justify="center" gutter={[24, 18]}>
        {data?.services?.filter((product: any) => product.status === "available")?.map((product: any, i: number) => {
          return <SingleService key={i} product={product} />;
        })}
      </Row>
    </div>
  );
};

export default AvailableService;
