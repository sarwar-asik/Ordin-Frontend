"use client";
import React from "react";
import { Button, Form, Input, Upload, message } from "antd";
import uploadImgCloudinary from "@/hooks/cloudinary";
import { useRouter } from "next/navigation";

import { UploadOutlined } from "@ant-design/icons";
import {
  useSingleCategoryQuery,
  useUpdateCategoryMutation,
} from "@/redux/api/categoryApi";
import BreadCumbUI from "@/components/ui/BreadCumbUI";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  title: string;
  img: string;
  details: string;
};

const UpdateCategoryPage = ({ params: { id } }: { params: { id: string } }) => {
  // console.log(id);
  const router = useRouter();
  const { data: defaultCategory, isLoading } = useSingleCategoryQuery(id);
  const [updateCategory] = useUpdateCategoryMutation();
  // console.log("🚀 ~ file: page.tsx:25", defaultCategory);

  //   console.log(defaultCategory?.name);
  //   console.log(defaultCategory?.img);

  const onFinish = async (values: any) => {
    console.log(values, "vvv");

    message.loading("updating .........");
    if (values.img?.file?.originFileObj) {
      const file = values.img.file.originFileObj;
      const data = await uploadImgCloudinary(file);

      values.img = data;
    } else {
      values.img = defaultCategory?.img;
      console.log(values.img, "And", defaultCategory?.img);
    }

    try {
      //   // console.log("newValue", values);
      const res = await updateCategory({ ...values }).unwrap();
      console.log(res, "updateProfile response");

      if (res) {
        message.success("successfully Updated category");
        router.push("/admin/category");
      } else {
        message.warning("failed to update ");
      }
    } catch (error) {
      console.error("Error in onFinish:", error);
    }
  };

  if (isLoading) {
    return <div>Loading Category....</div>;
  }

  //   const defaultName =JSON.stringify(defaultCategory?.name)
  //   console.log(defaultName);

  return (
    <div className=" shadow-xl p-5">
       <BreadCumbUI
        items={[
          {
            label: "Categories",
            link: "/admin/category",
          },
          {
            label: `${defaultCategory?.title}`,
            link: `/admin/category/update/${id}`,
          },
        ]}
      />
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
        <h2 className="font-serif mt-2 mb-7">Update Category</h2>
        <Form.Item
          label={<span className="form-label">Title</span>}
          name="title"
          className="form-input"
          initialValue={defaultCategory?.title}
          rules={[{ required: true, message: "Please input your title!" }]}
        >
          <Input placeholder="Your Title" />
        </Form.Item>
        <Form.Item
          label={<span className="form-label">details</span>}
          labelAlign="left"
          name="details"
          className="form-input"
          initialValue={defaultCategory?.details}
          rules={[{ required: true, message: "Please input your details!" }]}
        >
          <Input.TextArea placeholder="details" />
        </Form.Item>

        <Form.Item
          label={<span className="form-label">Select a Image</span>}
          name="img"
          initialValue={defaultCategory?.img}
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
                url: defaultCategory?.img, // The URL of the default image
              },
            ]}
          >
            <Button icon={<UploadOutlined />}>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8 }}>
          <Button type="primary" htmlType="submit" block>
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateCategoryPage;
