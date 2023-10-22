import { Card, Col, Image } from "antd";

import React from "react";

const SingleCategory = ({ category }: { category: any }) => {
  return (
    <Col
      style={{ background: "white", padding: "0 auto" }}
      key={category?.title}
      xs={24}
      sm={24}
      md={12}
      lg={6}
    >
      <Card
        // className="hover:shadow-2xl transform-cpu transition-transform delay-100 hover:scale-110"
        hoverable
        style={{ width: 310, marginInline: "auto", padding: "0 10px" }}
        cover={
          <Image
            // className="transform transition-transform delay-300 hover:scale-110"
            src={category.img}
            // height={230}
            // width={120}
            style={{ height: "150px", width: "" }}
            alt={category?.title}
          />
        }
      >
        <h2 className="text-left">{category?.title}</h2>
      </Card>
    </Col>
  );
};

export default SingleCategory;
