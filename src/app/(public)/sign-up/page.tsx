"use client";

import React from "react";
import { Button, Checkbox, Form, Input, Upload } from "antd";
import Uploader from "@/components/ui/Uploader";
import Image from "next/image";
import loginImg from "@/assets/login.png";

const onFinish = (values: any) => {
  console.log("userData:", values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  name: string;
  password: string;
  email: string;
  contact: string;
  img: string;
  accept: string;
};

const SignUpPage = () => (
  <div className="lg:flex items-center justify-between bg-slate-300 p-2 ">
    <section className="lg:w-[45%]  ">
      <Image
        className="w-full h-screen  rounded-md"
        height={350}
        width={400}
        src={loginImg}
        alt="login"
      />
    </section>
    <Form
      name="basic"
      //   labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      className="w-full lg:w-[55%] my-1 mx-auto h-screen   pl-5"
      //   style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      // autoComplete="off"
    >
      <h2 className="text-[4rem] font-extrabold mb-3  fon-serif">Login </h2>
      <Form.Item<FieldType>
        name="name"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <label className="text-[1.2em] font-[400]">
          Your Name
        </label>
        <Input placeholder="Your Name" />
      </Form.Item>
      <Form.Item<FieldType>
        // label="Email"
        labelAlign="left"
        name="email"
        rules={[{ required: true, message: "Please input your email!" }]}
      >
        <label  className="text-[1.2em] font-[400]">
          Email
        </label>
        <Input type="email" placeholder="example@gmail.com" />
      </Form.Item>
      <Form.Item<FieldType>
        // label="Contact Num"
        name="contact"
        rules={[{ required: true, message: "Please input your Contact Num!" }]}
      >
        <label className="text-[1.2em] font-[400]">
          Contact Number
        </label>
        <Input type="number" />
      </Form.Item>

      {/* //! image upload */}

      <Form.Item<FieldType>
        // label="Select Image"
        name="img"
        rules={[{ required: true, message: "Please Select the Image" }]}
      >
        <label  className="text-[1.2em] font-[400]">
          Select Image
        </label>
        <Uploader />
      </Form.Item>

      <Form.Item<FieldType>
        // label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <label className="text-[1.2em] font-[400]">
          Password
        </label>
        <Input.Password />
      </Form.Item>

      <Form.Item<FieldType> name="accept" valuePropName="checked">
        <Checkbox>
          Agree to our <a href="">term and policy?</a>
        </Checkbox>
      </Form.Item>

      <Form.Item>
        <Button block type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  </div>
);

export default SignUpPage;
