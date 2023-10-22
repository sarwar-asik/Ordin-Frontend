"use client";

import React, { useState } from "react";
import { Button, Checkbox, Form, Input, Typography, Upload, message, } from "antd";
import Uploader from "@/components/ui/Uploader";
import Image from "next/image";
import loginImg from "@/assets/loginSider.png";
import { useRouter } from "next/navigation";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/utils/local.storeage";
import Link from "next/link";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  password: string;
  email: string;
};

const LoginPage = () => {
  const router = useRouter();
  const [userLogin] = useUserLoginMutation();

  const onFinish = async (values: any) => {
    try {
      message.loading("processing login....")
      const response = await userLogin({ ...values }).unwrap();
      // console.log(response, "login response");
      if (response?.accessToken) {
        storeUserInfo({ accessToken: response?.accessToken });
        message.success("Login SuccessFully");
        router.push("/profile");
      }
      else{
        message.error("Your Password or email Wrong!")
      }
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  return (
    <div className="lg:flex items-center justify-between  p-2 ">
      <section className="lg:w-[45%]  ">
        <Image
          className="w-full h-screen  round"
          height={350}
          width={400}
          src={loginImg}
          alt="login"
        />
      </section>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        labelAlign="left"
        labelWrap={true}
        className="w-full lg:w-[55%] my-1 mx-auto min-h-scre shadow-lg  pl-5"
        //   style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <h2 className="text-[3rem] font-extrabold mb-3  fon-serif">Login </h2>

        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Email</span>}
          labelAlign="left"
          name="email"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          {/* <label  className="text-[1.2em] font-[400]">
            Email
          </label> */}
          <Input type="email" placeholder="example@gmail.com" />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Password</span>}
          name="password"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your password!" }]}
        >
          <Input.Password />
        </Form.Item>
        <Form.Item>
          <Typography style={{ fontFamily: "monospace" }}>
            Did not registered ? <Link href="/sign-up">Sign UP please...</Link>
          </Typography>
        </Form.Item>

        <Form.Item wrapperCol={{ span: 8 }}>
          <Button block type="primary" htmlType="submit">
            Login
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default LoginPage;
