import { Card, Col, Divider, Image } from "antd";

import React from "react";

const SingleCategory = ({ category }: { category: any }) => {

  console.log(category, 'category');

  return (
    <div
      // style={{ background: "white", padding: "10px auto", backgroundColor: "red" }}
      key={category?.title}
      // xs={24}
      // sm={24}
      // md={12}
      // lg={6}

      className="w-[23rem] mx-auto"
    >


      <Image
        // className="transform transition-transform delay-300 hover:scale-110"
        src={category.img}
        // height={230}
        // width={120}
        style={{ height: "25rem", width: "23rem" }}
        alt={category?.title}
      />

      <div className="mt-5">
        <h2 className="text-left uppercase text-xl font-normal text-gray-700">{category?.title}</h2>

        <Divider>{category?.services?.length}</Divider>

        <p className="text-gray-600">{category?.details}</p>
      </div>

    </div>
  );
};

export default SingleCategory;
