import { CutText } from "@/helpers/CutText";
import { Card, Col, Divider, Image } from "antd";

import React from "react";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";

const SingleCategory = ({ category }: { category: any }) => {


  const screens = useBreakpoint();
  // console.log(category, 'category');

  return (
    <div
      // style={{ background: "white", padding: "10px auto", backgroundColor: "red" }}
      key={category?.title}
      // xs={24}
      // sm={24}
      // md={12}
      // lg={6}

      className=" shadow-2xl"
    >


      <Image
        // className="transform transition-transform delay-300 hover:scale-110"
        src={category.img}
        // height={230}
        // width={120}
        style={{ height: "25rem", width: screens?.sm ? "full" : "full" }}
        // className="w-[23rem] lg:w-[27rem] mx-auto shadow-xl"
        alt={category?.title}
      />

      <div className="my-5 py-4 px-3">
        <h2 className="text-center  uppercase text-2xl font-normal text-gray-700">{category?.title}</h2>

        <Divider style={{}}>
          <span className="text-xl ">{category?.services?.length} Service</span>
        </Divider>

        <p className="text-gray-600 text-center">
          <CutText key={category?.title} maxLength={86} suffixCount={6}>
            {category?.details}
          </CutText>
        </p>
      </div>

    </div>
  );
};

export default SingleCategory;
