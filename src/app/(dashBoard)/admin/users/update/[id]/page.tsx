"use client";
import React from "react";
import { Button, Form, Input, Select, Upload, message } from "antd";
import uploadImgCloudinary from "@/hooks/cloudinary";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSingleUserQuery, useUpdateUserMutation } from "@/redux/api/userAPi";
import { UploadOutlined, UserOutlined } from "@ant-design/icons";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  name: string;
  email: string;
  contact: string;
  img: string;
  role: string;
};

const UpdateUserPage = ({ params: { id } }: { params: { id: string } }) => {
  console.log(id);
  const router = useRouter();
  const { data: defaultProfile, isLoading } = useSingleUserQuery(id);

  const [updateUser] = useUpdateUserMutation();
  //   console.log("🚀 ~ file: page.tsx:25", defaultProfile);

  //   console.log(defaultProfile?.name);
  //   console.log(defaultProfile?.img);

  const onFinish = async (values: any) => {
    // console.log(values,"vvv");
    if (values.img?.file?.originFileObj) {
      const file = values.img.file.originFileObj;
      const data = await uploadImgCloudinary(file);
      // console.log(data, "imagebb data...");
      values.img = data;
    } else {
      values.img = defaultProfile?.img;
      console.log(values.img, "And", defaultProfile?.img);
    }

    try {
      //   // console.log("newValue", values);
      const res = await updateUser({ ...values }).unwrap();
      console.log(res, "updateProfile response");

      if (res) {
        message.success("successfully Updated Profile");
        router.push("/profile");
      }
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  if (isLoading) {
    return <div>Loading User ...</div>;
  }

  //   const defaultName =JSON.stringify(defaultProfile?.name)
  //   console.log(defaultName);

  return (
    <div className="lg:flex items-center  justify-between shadow-xl p-2">
      <Form
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 24 }}
        labelAlign="left"
        labelWrap={true}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className=" w-full lg:w-3/6"
      >
        <h2 className="form-title">Update User</h2>
        <Form.Item
          label={<span className="form-label">Name</span>}
          name="name"
          className="form-input"
          initialValue={defaultProfile?.name}
          rules={[{ required: true, message: "Please input your username!" }]}
        >
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          label={<span className="form-label">Email</span>}
          labelAlign="left"
          name="email"
          className="form-input"
          initialValue={defaultProfile?.email}
          rules={[{ required: true, message: "Please input your email!" }]}
        >
          <Input
            type="email"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="example@gmail.com"
          />
        </Form.Item>
        <Form.Item
          label={<span className="form-label">Contact</span>}
          name="contact"
          className="form-input"
          initialValue={defaultProfile?.contact}
          rules={[
            { required: true, message: "Please input your Contact Num!" },
          ]}
        >
          <Input type="number" />
        </Form.Item>

        <Form.Item
          name="role"
          label="role"
          initialValue={defaultProfile?.role}
          rules={[{ required: true, message: "Please input your role" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Select
            defaultActiveFirstOption
            options={[
              {
                label: defaultProfile?.role+"(current)",
                value:defaultProfile?.role,
              },
              {
                label: "admin",
                value: "admin",
              },
              {
                label: "user",
                value: "user",
              }
            ]}
          />
        </Form.Item>

        <Form.Item
          label={<span className="form-label">Select a Image</span>}
          name="img"
          initialValue={defaultProfile?.img}
          rules={[{ required: true, message: "Please Select the Image" }]}
        >
          <Upload
            listType="picture-card"
            showUploadList={true}
            action="/api/file"
            maxCount={1}
            defaultFileList={[
              {
                uid: "1", // A unique identifier (string or number)
                name: "default-image.png", // The name of the file
                status: "done", // The status of the file (done, uploading, error)
                url: defaultProfile?.img, // The URL of the default image
              },
            ]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8 }}>
          <Button type="primary" htmlType="submit" block>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateUserPage;
