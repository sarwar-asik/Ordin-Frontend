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

import Image from "next/image";
import loginImg from "@/assets/signUpSider.png";

import uploadImgCloudinary from "@/hooks/cloudinary";
import { useRouter } from "next/navigation";
import { useUserSignUpMutation } from "@/redux/api/authApi";

import Link from "next/link";
import uploadImgBB from "@/hooks/imgbbUploads";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  name: string;
  password: string;
  email: string;
  contact: string;
  img: string;
  accept?: string;
};

const SignUpPage = () => {
  const router = useRouter();
  const [form] = Form.useForm();
  const [userSignUp] = useUserSignUpMutation();
  const [darkMode, setDarkMode] = useState(false);
  const onFinish = async (values: any) => {
    console.log(values);
    const file = values.img.file.originFileObj;
    message.loading("sign up processing...");

    // return
    try {
      // / ! Image upload hook
      // const data = await uploadImgCloudinary(file);
      const data = await uploadImgBB(file);
      // console.log(data, "imagebb data...");
      values.img = data;
      // console.log("newValue", values);

      const res = await userSignUp({ ...values }).unwrap();
      // console.log(res, "signup respoFnse");

      if (res) {
        message.success("successfully Sign UP");
        form.resetFields();
      }
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  return (
    <div className="">
      {/* <section className="lg:w-[45%]  ">
        <Image
          className="w-full h-screen "
          height={350}
          width={400}
          src={loginImg}
          alt="login"
        />
      </section> */}
      {/* <div className="w-full lg:w-[55%] my-1 mx-auto h-scree   pl-5">
        <Form
          name="basic"
          labelCol={{ span: 6 }}
          wrapperCol={{ span: 16 }}
          labelAlign="left"
          labelWrap={true}
          form={form}
          className="px-10 lg:w-[70%]"
          //   style={{ maxWidth: 600 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        // autoComplete="off"
        >
          <h2 className="text-[3rem] font-extrabold mb-3  fon-serif">
            Sign Up
          </h2>
          <Form.Item<FieldType>
            label={<span className="text-[1.2em] font-medium">Name</span>}
            name="name"
            // className="w-full py-1 input"
            className="w-full py-1 input"
            rules={[{ required: true, message: "Please input your username!" }]}
          >
            <Input placeholder="Your Name" />
          </Form.Item>

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
            label={<span className="text-[1.2em] font-medium">Contact</span>}
            name="contact"
            className="w-full py-1 input"
            rules={[
              { required: true, message: "Please input your Contact Num!" },
            ]}
          >
            <Input type="number" />
          </Form.Item>

          <Form.Item<FieldType>
            label={
              <span className="text-[1.2em] font-medium">Select a Image</span>
            }
            name="img"
            rules={[{ required: true, message: "Please Select the Image" }]}
          >
            <Upload
              listType="picture-card"
              className="avatar-uploader"
              showUploadList={true}
              maxCount={1}
              action="/api/file"
            >
              <Button>Upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item<FieldType>
            label={<span className="text-[1.2em] font-medium">Password</span>}
            name="password"
            className="w-full py-1 input"
            rules={[{ required: true, message: "Please input your password!" }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType> valuePropName="checked">
            <Checkbox>
              Agree to our <a href="">term and policy?</a>
            </Checkbox>
          </Form.Item>

          <Form.Item>
            <Typography style={{ fontFamily: "monospace" }}>
              Already registered ? <Link href="/login">Login please...</Link>
            </Typography>
          </Form.Item>

          <Form.Item wrapperCol={{ span: 8 }}>
            <Button block type="primary" htmlType="submit">
              Sign Up
            </Button>
          </Form.Item>
        </Form>
      </div> */}
      <div className="flex flex-col justify-center items-center w-full h-[100vh] bg-[#1f7070] px-5">

        <div
          className={`xl:max-w-3xl ${darkMode ? "bg-black" : "bg-white"
            }  w-full p-5  rounded-md`}
        >
          <h1
            className={`text-center text-xl sm:text-3xl font-semibold ${darkMode ? "text-white" : "text-black"
              }`}
          >
            Register for a free account
          </h1>
          <div className="w-full mt-8">
            <Form

              name="basic"
              labelCol={{ span: 6 }}
              wrapperCol={{ span: 16 }}
              labelAlign="left"
              labelWrap={true}
              form={form}
              // className="px-10 lg:w-[70%]"
              //   style={{ maxWidth: 600 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              className="mx-auto max-w-xs sm:max-w-md md:max-w-lg flex flex-col gap-4">

              <div className="flex flex-col sm:flex-row gap-3">
                {/* <input
                  className={`w-full px-5 py-3 rounded-lg font-medium border-2 border-transparent placeholder-gray-500 text-sm focus:outline-none  focus:border-2  focus:outline ${darkMode
                    ? "bg-[#302E30] text-white focus:border-white"
                    : "bg-gray-100 text-black focus:border-black"
                    }`}
                  type="text"
                  placeholder="Your first name"
                /> */}
                <Form.Item<FieldType>
                  // label={<span className="text-[1.2em] font-medium">Name</span>}
                  name="name"
                  // className="w-full py-1 input"
                  className="w-full py-1 input"
                  rules={[{ required: true, message: "Please input your username!" }]}
                  labelCol={{ span: 0 }} // Hide label
                  wrapperCol={{ span: 24 }} // Full width wrapper
                >
                  <Input placeholder="Your Name" style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem", "borderRadius": "0.5rem", "borderWidth": "2px", "borderColor": "transparent", "width": "100%", "fontSize": "0.875rem", "lineHeight": "1.25rem", "fontWeight": 500, "color": "#000000", "backgroundColor": "#F3F4F6" }} />
                </Form.Item>

              </div>
              <Form.Item<FieldType>
                // label={<span className="text-[1.2em] font-medium">Email</span>}
                labelCol={{ span: 0 }} // Hide label
                wrapperCol={{ span: 24 }} // Full width wrapper
                labelAlign="left"
                name="email"
                className="w-full py-1 input"
                rules={[{ required: true, message: "Please input your email!" }]}
              >
                <Input type="email" placeholder="example@gmail.com" style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem", "borderRadius": "0.5rem", "borderWidth": "2px", "borderColor": "transparent", "width": "100%", "fontSize": "0.875rem", "lineHeight": "1.25rem", "fontWeight": 500, "color": "#000000", "backgroundColor": "#F3F4F6" }} />
              </Form.Item>

              <Form.Item<FieldType>
                // label={<span className="text-[1.2em] font-medium">Contact</span>}
                name="contact"
                className="w-full py-1 input"
                rules={[
                  { required: true, message: "Please input your Contact Num!" },
                ]}
                labelCol={{ span: 0 }} // Hide label
                wrapperCol={{ span: 24 }} // Full width wrapper
              >
                <Input type="number" style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem", "borderRadius": "0.5rem", "borderWidth": "2px", "borderColor": "transparent", "width": "100%", "fontSize": "0.875rem", "lineHeight": "1.25rem", "fontWeight": 500, "color": "#000000", "backgroundColor": "#F3F4F6" }} placeholder="Enter Your Contact Number" />
              </Form.Item>

              <Form.Item<FieldType>
                label={
                  <span className="text-[1.2em] font-medium">Select a Image</span>
                }
                name="img"
                rules={[{ required: true, message: "Please Select the Image" }]}
                labelCol={{ span: 0 }} // Hide label
                wrapperCol={{ span: 24 }} // Full width wrapper
              >
                <Upload
                  listType="picture-card"
                  className="avatar-uploader"
                  showUploadList={true}
                  maxCount={1}
                  action="/api/file"
                >
                  <Button>Upload</Button>
                </Upload>
              </Form.Item>

              <Form.Item<FieldType>
                // label={<span className="text-[1.2em] font-medium">Password</span>}
                name="password"
                className="w-full py-1 input"
                rules={[{ required: true, message: "Please input your password!" }]}
                labelCol={{ span: 0 }} // Hide label
                wrapperCol={{ span: 24 }} // Full width wrapper
              >
                <Input.Password placeholder="Write a Password" style={{ "paddingTop": "0.75rem", "paddingBottom": "0.75rem", "paddingLeft": "1.25rem", "paddingRight": "1.25rem", "borderRadius": "0.5rem", "borderWidth": "2px", "borderColor": "transparent", "width": "100%", "fontSize": "0.875rem", "lineHeight": "1.25rem", "fontWeight": 500, "color": "#000000", "backgroundColor": "#F3F4F6" }} />
              </Form.Item>


              <button className="mt-5 tracking-wide font-semibold bg-primary text-gray-100 w-full py-4 rounded-lg hover:bg-primary/90 transition-all duration-300 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none">
                <svg
                  className="w-6 h-6 -ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
                  <circle cx="8.5" cy="7" r="4" />
                  <path d="M20 8v6M23 11h-6" />
                </svg>
                <span className="ml-3">Register</span>
              </button>
              <Form.Item<FieldType> valuePropName="checked">
                <Checkbox>
                  Agree to our <a href="">term and policy?</a>
                </Checkbox>
              </Form.Item>

              <Form.Item>
                <Typography style={{ fontFamily: "monospace" }}>
                  Already registered ? <Link href="/login">Login please...</Link>
                </Typography>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage;
