"use client";
import React from "react";

import { Divider, Row } from "antd";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import SingleCategoryPage from "@/components/ui/SingleCategory";
import LoadingData from "@/components/ui/Loader/LoadingData";
import LoaderCategory from "@/components/ui/Loader/LoaderCategory";

const CategoriesPage = () => {
  const { data: categories, isLoading } = useCategoriesQuery({
    page: 1,
    limit: 10,
  });


  return (
    <div className=" bg-secondary py-5 rounded-md px-1">
      <section className="my-7 text-center">
        <h1 className=" text-[2.3rem] font-serif">Which Interior we Provide?</h1>

        {/* <Divider orientation="center" style={{
          background:"black",
          fontWeight:"700",
          width:"50px",
          color:"#4BB4B4"
        }}/> */}

        <p className="mt-3 font-medium font-sans">
          Here are some available interior service of our best Service. We
          provide the services in <br /> flexible time with best demandfull
          desing.Here upcoming interior service of our best Service .
        </p>
      </section>
      {
        isLoading&& 
        <LoaderCategory/>
      }
      
      
      <Row align="middle" justify="start" gutter={20} style={{
        marginTop:"3rem"
      }}>
        {categories?.category?.map((category: any, i: number) => {
          return <SingleCategoryPage key={i} category={category} />;
        })}
      </Row>
    </div>
  );
};

export default CategoriesPage;
