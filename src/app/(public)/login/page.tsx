"use client";

import React, { useState } from "react";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Typography,
  Upload,
  message,
} from "antd";
import Uploader from "@/components/ui/Uploader";
import Image from "next/image";
import loginImg from "@/assets/loginSider.png";
import { useRouter } from "next/navigation";
import { useUserLoginMutation } from "@/redux/api/authApi";
import { storeUserInfo } from "@/utils/local.storeage";
import { UserOutlined } from '@ant-design/icons';
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
      message.loading("processing login....");

      // return
      const response = await userLogin({ ...values }).unwrap();
      // console.log(response, "login response");
      if (response?.accessToken) {
        storeUserInfo({ accessToken: response?.accessToken });
        message.success("Login SuccessFully");
        router.push("/profile");
      } else {
        message.error("Your Password or email Wrong!");
      }
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  return (
    <div className="lg:flex items-center justify-between  p-2 ">
      {/* <section className="lg:w-[45%]  ">
        <Image
          className="w-full h-screen  round"
          height={350}
          width={400}
          src={loginImg}
          alt="login"
        />
      </section> */}
      {/* <div className="w-full lg:w-[55%] my-1 mx-auto min-h-scre shadow-lg  px-5 ">
        <Form
          name="basic"
          labelCol={{ span: 6}}
          wrapperCol={{ span: 18 }}
          labelAlign="left"
          labelWrap={true}
            // style={{ maxWidth: 600 }}
            className="px-10 w-[70%]"
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
           <Link href="/login" className="text-red-400"> Forgot Password</Link>
          </Form.Item>
          <Form.Item>
            <Typography style={{ fontFamily: "monospace" }}>
              Did not registered ?{" "}
              <Link href="/sign-up" className="text-primary">Sign UP please...</Link>
            </Typography>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 8 }}>
            <Button block type="primary" htmlType="submit">
              Login
            </Button>
          </Form.Item>
        </Form>
      </div> */}
      <div className="font-[sans-serif] text-[#333] max-w-7xl mx-auto h-screen">
        <div className="grid md:grid-cols-2 items-center gap-8 h-full">
          <Form
            name="login"
            labelCol={{ span: 6 }}
            wrapperCol={{ span: 18 }}
            labelAlign="left"
            labelWrap={true}
            // style={{ maxWidth: 600 }}
            // className="px-10 w-[70%]"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            className="max-w-xl max-md:mx-auto w-full p-6"

          >
            <div className="mb-10">
              <h3 className="text-4xl font-extrabold">Sign in</h3>
              <p className="text-sm mt-6">Immerse yourself in a hassle-free login journey with our intuitively designed login form. Effortlessly access your account.</p>
            </div>
            <div>


              <Form.Item<FieldType>
                // label={<span className="text-[1.2em] font-medium">Email</span>}
                labelAlign="left"
                name="email"
                className="w-full py-1 input"
                rules={[{ required: true, message: "Please input your email!" }]}
                labelCol={{ span: 0 }} // Hide label
                wrapperCol={{ span: 24 }} // Full width wrapper
              >

                <Input type="email" placeholder="example@gmail.com" suffix={<UserOutlined />} style={{
                  padding: "1rem",
                  borderRadius: "0.375rem",
                  width: "100%",
                  fontSize: "0.875rem",
                  lineHeight: "1.25rem",
                  backgroundColor: "#F3F4F6",
                }} />
              </Form.Item>


              <Form.Item
                name="password"
                rules={[{ required: true, message: "Please input your password!" }]}
                labelCol={{ span: 0 }} // Hide label
                wrapperCol={{ span: 24 }} // Full width wrapper
              >
                <div className="w-full">
                  <label className="text-[15px] mb-3 block">Password</label>
                  {/* Corrected the type prop to "password" */}
                  <Input.Password
                    placeholder="Enter your password"
                    style={{
                      padding: "1rem",
                      borderRadius: "0.375rem",
                      width: "100%",
                      fontSize: "0.875rem",
                      lineHeight: "1.25rem",
                      backgroundColor: "#F3F4F6",
                    }}
                  />
                </div>
              </Form.Item>

            </div>
            <div className="flex items-center gap-4 justify-between mt-4">
              <div className="flex items-center">
                <input id="remember-me" name="remember-me" type="checkbox" className="shrink-0 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded" />
                <label className="ml-3 block text-sm">
                  Remember me
                </label>
              </div>
              <div className="text-sm">
                <a href="jajvascript:void(0);" className="text-blue-600 hover:underline">
                  Forgot your password?
                </a>
              </div>
            </div>
            <div className="mt-10">
              <Button type="primary" htmlType="submit" style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1rem", "paddingRight": "1rem", "borderRadius": "0.25rem", "width": "100%", "fontSize": "0.875rem", "lineHeight": "1.25rem", "fontWeight": 600, "color": "#ffffff", "backgroundColor": "#2563EB", "boxShadow": "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)", height: "3rem" }}>
                Log in
              </Button>
            </div>
            <p className="text-sm mt-10 text-center">Dont have an account <Link href="/sign-up" className="text-blue-600 font-semibold hover:underline ml-1">Register here</Link></p>
          </Form>
          <div className="h-full md:py-6 flex items-center relative max-md:before:hidden before:absolute before:bg-gradient-to-r before:from-gray-50 before:via-[#E4FE66] before:to-[#55F5A3] before:h-full before:w-3/4 before:right-0 before:z-0">
            <Image
              className="rounded-md lg:w-4/5 md:w-11/12 z-50 relative"
              height={350}
              width={400}
              src={loginImg}
              alt="login"
            />
          </div>
        </div>
      </div >
    </div >
  );
};

export default LoginPage;
