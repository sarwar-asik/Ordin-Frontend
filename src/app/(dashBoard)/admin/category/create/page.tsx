"use client";
import uploadImgCloudinary from "@/hooks/cloudinary";

import { getUserInfo } from "@/utils/local.storeage";
import { Button, DatePicker, Form, Input, Upload, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import FormateDateTime from "@/helpers/DateTimeFormated";
import { useCreateCategoryMutation } from "@/redux/api/categoryApi";
import uploadImgBB from "@/hooks/imgbbUploads";

interface FieldType {
  title: string;

  img: string;
  details: string;
}
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const CreateCategoryPage = () => {
  const postBy = getUserInfo() as any;
  const router = useRouter();
  const [form] = Form.useForm();
  const [createCategory] = useCreateCategoryMutation();

  const onFinish = async (values: any) => {
    const file = values.img.file.originFileObj;

    // console.log(values, "newV");
    //     const data = await uploadImgCloudinary(file);
    const data = await uploadImgBB(file);
    console.log(data)
    values.img = data;

    try {
      console.log(values)
      message.loading("creating category...");
      const res = await createCategory({ ...values }).unwrap();
      console.log(res, "Category response");
      if (res) {
        message.success("successfully created Category");
        form.resetFields();
        router.push("/admin/category");
      }
    } catch (error) {
      console.error("Error in onFinish the Category create", error);
    }
  };

  return (
    <Form
      name="Category"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
      labelWrap={true}
      className="w-full lg:w-[55%] my-1 mx-auto h-screen   pl-5"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed} // Vertical layout for better responsiveness
    >
      <h2 className="text-[2rem] font-extrabold mb-3  fon-serif">
        Create Category
      </h2>
      <Form.Item
        label={<span className="text-[1.2em] font-medium">Title</span>}
        name="title"
        rules={[{ required: true, message: "Title is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="details"
        name="details"
        rules={[{ required: true, message: "details is required" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Image Upload"
        name="img"
        rules={[{ required: true, message: "Image upload is required" }]}
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

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateCategoryPage;
