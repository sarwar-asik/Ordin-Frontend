"use client";

import React from "react";
import { Button, Form, Input, Upload, message, } from "antd";
import uploadImgCloudinary from "@/hooks/cloudinary";
import { useRouter } from "next/navigation";
import { useCreateAdminMutation } from "@/redux/api/userAPi";
import { useUserSignUpMutation } from "@/redux/api/authApi";
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
  role: "user";
};

const SignUpPage = () => {

  const router = useRouter();
  const [userSIgnUp] =useUserSignUpMutation()
const [form] = Form.useForm()
  const onFinish = async (values: any) => {
    message.loading("creating user .....")
    // console.log(values);
    const file = values.img.file.originFileObj;

    try {
      // const data = await uploadImgCloudinary(file);
      const data = await uploadImgBB(file);
      // console.log(data, "imagebb data...");
      values.img = data;
      
 
      const res = await userSIgnUp({ ...values }).unwrap();
    //   console.log(res, "create user response");

      if (res) {
        message.success("created user");
        form.resetFields()
        router.push("/super_user/users");
      }
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  return (
    <div className=" p-2 ">
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        labelAlign="left"
        labelWrap={true}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        form={form}
        // autoComplete="off"
      >
        <h2 className="text-[2rem] font-extrabold mb-3  fon-serif">
          Create User
        </h2>
        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">user Name</span>}
          name="name"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input username!" }]}
        >
          <Input placeholder="user Name" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Email</span>}
          labelAlign="left"
          name="email"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input user email!" }]}
        >
        
          <Input type="email" placeholder="example@gmail.com" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Contact</span>}
          name="contact"
          className="w-full py-1 input"
          rules={[
            { required: true, message: "Please input user Contact Num!" },
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
            showUploadList={true}
            action="/api/file"
            maxCount={1}
          >
            <Button>Upload</Button>
          </Upload>
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Password</span>}
          name="password"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input user password!" }]}
        >
          <Input.Password />
        </Form.Item>

    

        <Form.Item wrapperCol={{ span: 8 }}>
          <Button block type="primary" htmlType="submit">
           Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default SignUpPage;
