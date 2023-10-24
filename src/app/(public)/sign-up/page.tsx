"use client";

import React from "react";
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

  const onFinish = async (values: any) => {
    // console.log(values);
    const file = values.img.file.originFileObj;

    try {
      const data = await uploadImgCloudinary(file);
      // console.log(data, "imagebb data...");
      values.img = data;
      // console.log("newValue", values);
      message.loading("sign up processing...")
      const res = await userSignUp({ ...values }).unwrap();
      console.log(res, "signup response");

      if (res) {
        message.success("successfully Sign UP");
        form.resetFields();

      }
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  return (
    <div className="lg:flex items-center justify-between shadow-xl p-2 ">
      <section className="lg:w-[45%]  ">
        <Image
          className="w-full h-screen "
          height={350}
          width={400}
          src={loginImg}
          alt="login"
        />
      </section>
      <div className="w-full lg:w-[55%] my-1 mx-auto h-scree   pl-5">

     
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
        <h2 className="text-[3rem] font-extrabold mb-3  fon-serif">Sign Up</h2>
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
      </div>
    </div>
  );
};

export default SignUpPage;
