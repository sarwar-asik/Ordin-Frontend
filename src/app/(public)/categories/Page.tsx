"use client";
import React from "react";

import { Row } from "antd";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import SingleCategoryPage from "@/components/ui/SingleCategory";

const CategoriesPage = () => {
  const { data: categories, isLoading } = useCategoriesQuery({
    page: 1,
    limit: 10,
  });
//   console.log("🚀 ~ file: Page.tsx:11 ~ CategoriesPage ~ data:", categories);

  return (
    <div className="mt-[10rem] bg-secondary py-5 rounded-md px-1">
      <section className="my-7 ">
        <h1 className=" text-[2.3rem] font-serif">Interior Categories</h1>

        <p className="mt-3 font-medium font-sans">
          Here are some available interior service of our best Service. We
          provide the services in <br /> flexible time with best demandfull
          desing.Here upcoming interior service of our best Service .
        </p>
      </section>
      {
        isLoading&& 
        <h4>Loading Category....</h4>
      }

      <Row align="middle" justify="center" gutter={[10, 18]}>
        {categories?.category?.map((category: any, i: number) => {
          return <SingleCategoryPage key={i} category={category} />;
        })}
      </Row>
    </div>
  );
};

export default CategoriesPage;
