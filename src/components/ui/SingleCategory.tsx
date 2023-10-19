import { BookOutlined } from "@ant-design/icons";
import { Button, Card, Col, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./Button/AddToCartButton";

const SingleCategory = ({ category }: { category: any }) => {
  return (
    <Col
      style={{ background: "white" }}
      key={category?.title}
      xs={24}
      sm={24}
      md={12}
      lg={8}
    >
      <Card
      className="hover:shadow-xl"
        hoverable
        style={{ width: 330, marginInline: "auto", height: 310 ,padding:"10px"}}
        cover={
          <Image
            className="transform transition-transform delay-300 hover:scale-110"
            src={category.img}
            height={230}
            width={120}
            // style={{ height: "200px"}}
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
