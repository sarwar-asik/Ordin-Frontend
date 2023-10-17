"use client";
import { useSingleServiceQuery } from "@/redux/api/serviceApi";
import { Button, Col, DatePicker, Form, Input, Row, message } from "antd";
import React from "react";

import { Descriptions } from "antd";
import { CreditCardOutlined, CreditCardTwoTone } from "@ant-design/icons";
import { getUserInfo } from "@/utils/local.storeage";
import {
  useCreateBookingMutation,
  useUserBookingQuery,
} from "@/redux/api/bookingApi";
import BreadCumbUI from "@/components/ui/BreadCumbUI";

const BookingCreatePage = ({
  params: { serviceId },
}: {
  params: { serviceId: string };
}) => {
  // console.log(serviceId,"serviceId");
  const { data, isLoading } = useSingleServiceQuery(serviceId);
  const [createBooking] = useCreateBookingMutation();

  const useInfo = getUserInfo() as any;

  const serviceData = data;

  const { data: BookData } = useUserBookingQuery(serviceData?.id);


  const onFinish = async (values: any) => {
    // console.log('Received values:', values);

    const submitData = {
      userId: useInfo?.id,
      serviceId: serviceData.id,
    };
    console.log(submitData);
    try {
      const response = (await createBooking({ ...submitData })) as any;
      console.log(response, "response of book");
      if (response?.data) {
        message.success("Booked Service");
      }
    } catch (error) {
      console.log("🚀 ~ file: page.tsx:36 ~ onFinish ~ error:", error);
    }

    // You can handle the payment submission here.
  };

  return (
    <div className="">
      <BreadCumbUI
        items={[
          {
            label: "user",
            link: "/profile",
          },
          {
            label: "cart",
            link: "/user/cart",
          },
          {
            label: "booking",
            link: `/user/booking/${serviceId}`,
          },
        ]}
      />
      <Row gutter={[16, 16]}>
        <Col xs={24} lg={12} style={{ paddingInline: "10px" }}>
          {BookData && (
            <section>
              <h2 style={{ fontFamily: "serif", margin: "16px 0" }}>
                Already Booked the Service
              </h2>
            </section>
          )}
         <div hidden={BookData?true:false} className="">

         <Form name="payment-form" onFinish={onFinish} layout="vertical">
            <h1 style={{ fontSize: "1.5rem" }}>Book {serviceData?.title}</h1>

            <Form.Item
              label="Card Number"
              name="cardNumber"
              rules={[
                {
                  required: true,
                  message: "Please enter your card number!",
                },
                {
                  validator: (_, value) => {
                    // Add your custom card number validation logic here
                    if (/^\d{16}$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Invalid card number");
                  },
                },
              ]}
            >
              <Input
                placeholder="0000 0000 0000 0000"
                prefix={
                  <CreditCardOutlined
                    style={{ fontSize: "18px", color: "#ccc" }}
                  />
                }
                suffix={
                  <CreditCardTwoTone
                    twoToneColor="#005eb8" // Set the Visa blue color
                    style={{
                      fontSize: "24px",
                      color: "white",
                      backgroundColor: "#ffad00",
                      borderRadius: "4px",
                      padding: "4px",
                    }}
                  />
                }
              />
            </Form.Item>

            <Form.Item
              label="Expiration Date"
              name="expirationDate"
              rules={[
                {
                  required: true,
                  message: "Please enter the expiration date!",
                },
              ]}
            >
              <DatePicker format="MM/YY" placeholder="Select expiration date" />
            </Form.Item>

            <Form.Item
              label="CVV"
              name="cvv"
              rules={[
                {
                  required: true,
                  message: "Please enter the CVV code!",
                },
                {
                  validator: (_, value) => {
                    // Add your custom CVV validation logic here
                    if (/^\d{3}$/.test(value)) {
                      return Promise.resolve();
                    }
                    return Promise.reject("Invalid CVV");
                  },
                },
              ]}
            >
              <Input placeholder="e.g., 123" />
            </Form.Item>

            <Form.Item>
              <Button type="primary" htmlType="submit">
                Book Now
              </Button>
            </Form.Item>
          </Form>
         </div>
        </Col>
        <Col xs={24} lg={12}>
          <div className="custom-section">
            <Descriptions title="Booking Summary" bordered column={1}>
              <Descriptions.Item label="Service Title">
                {serviceData?.title}
              </Descriptions.Item>
              <Descriptions.Item label="Price">
                ${serviceData?.price}
              </Descriptions.Item>
              <Descriptions.Item label="Service Time">
                {serviceData?.serviceTime}
              </Descriptions.Item>
            </Descriptions>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default BookingCreatePage;
