"use client";

import { useCreateCartMutation } from "@/redux/api/cartApi";
import { useServicesQuery } from "@/redux/api/serviceApi";
import { getUserInfo } from "@/utils/local.storeage";
import { Button, Card, Col, Row, message } from "antd";
import Image from "next/image";
import React from "react";

const ServicePage = () => {
  const isUser = getUserInfo() as any;
  const [createCart] = useCreateCartMutation();
  const { data, isLoading } = useServicesQuery({ page: 1, limit: 20 });
  // console.log(data);

  const addToCart = async (cartData: any) => {
    const cartCreateData = {
      userId: isUser?.id,
      serviceId: cartData?.id,
    };
    try {
      const response = await createCart({ ...cartCreateData }) as any
      console.log(response);
      if (response?.data) {
        message.success("Success");
      }else{
        message.error("Can not add double")
      }
    } catch (error) {
      console.log("🚀 ~ file: page.tsx ~ addToCart ~ error:", error);
    }
    // console.log(cartData);
  };
  return (
    <div>
      <h1>Service Page</h1>

      <Row align="middle" gutter={16}>
        {data?.services?.map((product: any, i: number) => {
          const { img, title, price, contact, address, serviceTime } = product;
          return (
            <Col key={i} xs={24} sm={12} md={8} lg={6}>
              <Card
                hoverable
                style={{ width: 300, margin: "16px" }}
                cover={
                  <img
                    src={img}
                    // height={200} width={200}
                    style={{ height: "150px", marginInline: "auton" }}
                    alt={title}
                  />
                }
              >
                <div>
                  <h3>{title}</h3>
                  <p>Price: {price}</p>
                  <p>Contact: {contact}</p>
                  <p>Address: {address}</p>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Button
                    onClick={() => addToCart(product)}
                    type="primary"
                    // icon={<i className="fas fa-shopping-cart"></i>}
                  >
                    Add to Cart
                  </Button>
                  <Button
                    type="default"
                    icon={<i className="fas fa-calendar-alt"></i>}
                  >
                    Book
                  </Button>
                </div>
              </Card>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default ServicePage;
