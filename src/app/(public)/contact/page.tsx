"use client";
import { CustomerServiceOutlined, HeatMapOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import React from "react";

const ContactPage = () => {
  const onFinish = (values:any) => {
    console.log("Received values:", values);
    // Handle form submission here
  };
  return (
    <div>
     
        <div className="block lg:flex items-center gap-2 mt-12">
          <div className="w-full lg:w-[45%]">
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-7 pb-4">
              You reach to us by this address or Your can message us .

            </p>
            <div className="space-y-4 mt-3">
              <div className="flex items-center gap-2">
              <HeatMapOutlined />
                <span>123 Stepen Roady</span>
              </div>
              <div className="flex items-center gap-2">
              <CustomerServiceOutlined />
                <span>123456789</span>
              </div>
              <div className="flex items-center gap-2">
              <MailOutlined/>
                <span>ordain@business.com</span>
              </div>
            </div>
          </div>
          <Form
            className="w-full lg:w-[55%] mx-auto space-y-6 rounded-md  text-black px-2 mt-5"
            onFinish={onFinish}
          >
            <h2 className="text-3xl font-bold leading">Contact us</h2>
            <Form.Item
              name="name"
              rules={[{ required: true, message: "Please enter your name" }]}
            >
              <Input
                placeholder="Your name"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-ri focus:ring-ri "
              />
            </Form.Item>
            <Form.Item
              name="email"
              rules={[
                { required: true, message: "Please enter your email" },
                { type: "email", message: "Please enter a valid email" },
              ]}
            >
              <Input
                placeholder="Your email"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-ri focus:ring-ri "
              />
            </Form.Item>
            <Form.Item name="message">
              <Input.TextArea
                placeholder="Message..."
                autoSize={{ minRows: 3 }}
                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-ri focus:ring-ri "
              />
            </Form.Item>
            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className=" px-4 py-2 bg-primary w-[7rem]"
              >
                Send
              </Button>
            </Form.Item>
          </Form>
        </div>

    </div>
  );
};

export default ContactPage;
