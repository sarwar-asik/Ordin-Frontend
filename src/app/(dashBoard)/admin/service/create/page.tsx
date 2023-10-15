"use client";

import React from "react";
import {
  Button,

  Form,
  Input,

  Upload,
  message,
} from "antd";



import uploadImgCloudinary from "@/hooks/cloudinary";
import { useRouter } from "next/navigation";


import Link from "next/link";
import { useCategoriesQuery } from "@/redux/api/categoryApi";

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

const CreateServicePage = () => {
  const router = useRouter();
//   const [userSignUp] = useUserSignUpMutation();
const  {data,isLoading} = useCategoriesQuery({page:1,limit:20})

// console.log("🚀 ~ file: page.tsx:40 ~ CreateServicePage ~ data:", data)

const Category = data?.category

console.log(Category,"category Data");


  const onFinish = async (values: any) => {
    // console.log(values);
    const file = values.img.file.originFileObj;

    try {
      const data = await uploadImgCloudinary(file);
      // console.log(data, "imagebb data...");
      values.img = data;

      console.log(values);
      // console.log("newValue", values);
    //   const res = await userSignUp({ ...values }).unwrap();
    //   console.log(res, "signup response");

    //   if (res?.accessToken) {
    //     message.success("successfully Sign UP");
    //   }
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  return (
    <div className="lg:flex items-center justify-between shadow-xl p-2 ">
        <h4>Go <Link href="/admin/service">Service page</Link></h4>
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        labelAlign="left"
        labelWrap={true}
        className="w-full lg:w-[55%] my-1 mx-auto h-screen   pl-5"
        //   style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        // autoComplete="off"
      >
        <h2 className="text-[2rem] font-extrabold mb-3  fon-serif">
          Create Service
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
          {/* <label  className="text-[1.2em] font-[400]">
            Email
          </label> */}
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
            showUploadList={false}
            action="/api/file"
          >
            <Button>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 8 }}>
          <Button block type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateServicePage;
