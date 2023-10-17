"use client";
import BreadCumbUI from "@/components/ui/BreadCumbUI";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";

import { Row, Col, Button, Divider } from "antd";
import Image from "next/image";
import React from "react";

const ServiceDetails = ({
  params: { serviceId },
}: {
  params: { serviceId: string };
}) => {
  console.log(serviceId);

  const { data, isLoading } = useSingleServiceQuery(serviceId);
  console.log("🚀 ~ file: page.tsx:17 ~ data:", data)

  const serviceImageStyle = {};

  const serviceTitleStyle = {
    fontSize: "24px",
    marginBottom: "10px",
  };

  const buttonStyle = {
    marginTop: "20px",
  };

  if (isLoading) {
    return <h2>Loading details ... </h2>;
  }

  return (
    <div>
      <BreadCumbUI
        items={[
          {
            label: "service",
            link: "/services",
          },
          {
            label: "Service Details",
            link: `/services/${serviceId}`,
          },
        ]}
      />

      <Row
        align="middle"
        justify="space-between"
        gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }}
      >
        <Col xs={24} md={12} lg={8}>
          <div className="">
            <Image
              src={data?.img}
              height={300}
              width={200}
              alt="Service"
              style={{
                width: "100%",
                height: "36rem",
                objectFit: "cover",
                border: "1px solid #ddd",
              }}
            />
          </div>
        </Col>
        <Col style={{ width: "100%", height: "36rem" ,padding:"5px 16px"}} xs={24} md={12} lg={16}>
          <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"0.6em"
            
          }}>
            <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
            {data?.title} Details
            </h1>
            <Divider
              plain
              style={{
                fontSize: "0.7rem",
                fontWeight: 400,
                background: "black",
              }}
            />

            <h1>
              {data?.title}
            </h1>
            <p>
             {data?.details}. 
             And {data?.details}.
              Always  {data?.details}
            </p>
            <p>
              <strong>Price:</strong> {data?.price}
            </p>
            <p>
              <strong>Contact:</strong> {data?.contact}
            </p>
            <p>
              <strong>Address:</strong> {data?.address}
            </p>
            <p>
              <strong>Service Time:</strong> {data?.serviceTime}
            </p>
            <p>
              <strong>Service Date:</strong> {data?.serviceData}
            </p>
            <Button type="primary" style={buttonStyle}>
              Add to Cart
            </Button>
            <Button type="primary" style={buttonStyle}>
              Book
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceDetails;
