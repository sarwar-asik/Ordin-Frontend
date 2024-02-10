"use client";
import uploadImgCloudinary from "@/hooks/cloudinary";
import { useCreateBlogMutation } from "@/redux/api/blogsApi";
import { getUserInfo } from "@/utils/local.storeage";
import { Button, DatePicker, Form, Input, Upload, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import FormateDateTime from "@/helpers/DateTimeFormated";
import uploadImgBB from "@/hooks/imgbbUploads";

interface FieldType {
  title: string;
  content: string;
  author: string;
  img: string;
  portal: string;
  publishedTime: Date;
}
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const CreateBlogs = () => {
  const postBy = getUserInfo() as any;
  const router = useRouter();
  const [createBlog] = useCreateBlogMutation();

  const onFinish = async (values: any) => {
    message.loading("creating blog...")
    const file = values.img.file.originFileObj;

    values["postBy"] = postBy?.id;


   const formattedPublishedTime = FormateDateTime(values.publishedTime)

    values.publishedTime = formattedPublishedTime
    
    // console.log(values,"newV");

    try {
        // const data = await uploadImgCloudinary(file);
      const data = await uploadImgBB(file);
        values.img = data;
        const res = await createBlog({ ...values }).unwrap();
        console.log(res, "blog response");
        if (res) {
          message.success("successfully created blog");
          router.push("/admin/blogs");
        }
    } catch (error) {
      console.error("Error in onFinish the blog create", error);
    }
  };

  return (
    <Form
      name="blogs"
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
        Create Blogs
      </h2>
      <Form.Item
        label={<span className="text-[1.2em] font-medium">Title</span>}
        name="title"
        rules={[{ required: true, message: "Title is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Content"
        name="content"
        rules={[{ required: true, message: "Content is required" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item
        label="Author"
        name="author"
        rules={[{ required: true, message: "Author is required" }]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Portal"
        name="portal"
        rules={[{ required: true, message: "Portal is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Published Time"
        name="publishedTime"
        rules={[{ required: true, message: "Published Time is required" }]}
      >
        <DatePicker showTime />
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

export default CreateBlogs;
