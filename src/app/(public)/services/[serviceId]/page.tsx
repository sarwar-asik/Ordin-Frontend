"use client";
import BreadCumbUI from "@/components/ui/BreadCumbUI";
import AddToCartButton from "@/components/ui/Button/AddToCartButton";
import LoadingData from "@/components/ui/Loader/LoadingData";
import AddReviewsPage from "@/components/ui/Reviews";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";

import { Row, Col, Button, Divider, Rate } from "antd";
import Image from "next/image";
import React from "react";

const ServiceDetails = ({
  params: { serviceId },
}: {
  params: { serviceId: string };
}) => {
  // console.log(serviceId);

  const { data, isLoading } = useSingleServiceQuery(serviceId);
  // console.log("🚀 ~ file: page.tsx:17 ~ data:", data);

  if (isLoading) {
    return <LoadingData/>
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
            label: `${data?.title}`,
            link: `/services/${serviceId}`,
          },
        ]}
      />

      <Row
        align="middle"
        justify="space-between"
        style={{
          padding: "5px 10px",
        }}
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
        <Col
          style={{ width: "100%", height: "36rem", padding: "5px 16px",display: "flex", flexDirection: "column",justifyContent:"space-between" }}
          xs={24}
          md={12}
          lg={16}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "0.6em",
            }}
          >
            <h1 style={{ fontSize: "24px", marginBottom: "10px" }}>
              Service Details
            </h1>
            <Divider
              plain
              style={{
                fontSize: "0.7rem",
                fontWeight: 400,
                background: "black",
              }}
            />

            <h1>{data?.title}</h1>
            <p>
              {data?.details}. And {data?.details}. Always {data?.details}
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
        
          </div>
          <div style={{ display: "flex", flexDirection: "column",gap:"5px" }}>
            <AddToCartButton service={data} />

            <Button type="primary">Book</Button>

            <AddReviewsPage serviceId={data?.id as string}></AddReviewsPage>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ServiceDetails;
