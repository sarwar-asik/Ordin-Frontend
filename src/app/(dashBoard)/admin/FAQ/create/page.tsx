"use client";
import uploadImgCloudinary from "@/hooks/cloudinary";

import { getUserInfo } from "@/utils/local.storeage";
import { Button, DatePicker, Form, Input, Upload, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";
import FormateDateTime from "@/helpers/DateTimeFormated";
import { useCreateFAQMutation } from "@/redux/api/FAQApi";

interface FieldType {
  question: string;
  answer: string;
}
const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

const CreateFAQ = () => {
 
  const router = useRouter();
  const [createFAQ] = useCreateFAQMutation();

  const onFinish = async (values: any) => {
    console.log(values, "newV");
    message.loading("creating Faq");

    try {
      const res = await createFAQ({ ...values }).unwrap();
      console.log(res, "FAQ response");
      if (res) {
        message.success("successfully created FAQ");
        router.push("/admin/FAQ");
      }
    } catch (error) {
      console.error("Error in onFinish the FAQ create", error);
    }
  };

  return (
    <Form
      name="FAQs"
      labelCol={{ span: 4 }}
      wrapperCol={{ span: 20 }}
      labelAlign="left"
      labelWrap={true}
      className="w-full lg:w-[55%] my-1 mx-auto h-screen   pl-5"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed} // Vertical layout for better responsiveness
    >
      <h2 className="text-[2rem] font-extrabold mb-3  fon-serif">Create FAQ</h2>
      <Form.Item
        label={<span className="text-[1.2em] font-medium">question</span>}
        name="question"
        rules={[{ required: true, message: "question is required" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="answer"
        name="answer"
        rules={[{ required: true, message: "answer is required" }]}
      >
        <Input.TextArea rows={4} />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit">
          Create
        </Button>
      </Form.Item>
    </Form>
  );
};

export default CreateFAQ;
