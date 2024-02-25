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


  const categoryData: any = categories?.category || []
  // console.log(categories,'categories');

  return (
    <div className=" bg-secondary py-5 rounded-md">
      <section className="my-7 text-center">
        <h1 className=" text-[2.3rem] font-serif uppercase text-[#4d4c4c]">What we Provide?</h1>

        {/* <Divider orientation="center" style={{
          background:"black",
          fontWeight:"700",
          width:"50px",
          color:"#4BB4B4"
        }}/> */}

        <p className="mt-3 font-medium font-sans text-[#5f5d5d]">
          Here are some available interior service of our best Service. We
          provide the services in <br /> flexible time with best demandfull
          desing.Here upcoming interior service of our best Service .
        </p>
      </section>
      {
        (isLoading || categoryData < 1) &&
        <LoaderCategory />
      }


      <div

        //  align="middle" justify="start" gutter={30} style={{
        //   marginTop: "3rem"
        // }}
        className="container mx-auto mt-[3rem] grid grid-cols-1 md:grid-cols-3 lg:rid-cols-3 xl:rid-cols-3 gap-3"

      >
        {categories?.category?.map((category: any, i: number) => {
          return <SingleCategoryPage key={i} category={category} />;
        })}
      </div>
    </div>
  );
};

export default CategoriesPage;
