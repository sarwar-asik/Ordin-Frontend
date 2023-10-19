"use client";

import React from "react";
import {
  Button,
  DatePicker,
  Form,
  Input,
  Select,
  TimePicker,
  Upload,
  message,
} from "antd";

import uploadImgCloudinary from "@/hooks/cloudinary";
import { useRouter } from "next/navigation";

import Link from "next/link";
import { useCategoriesQuery } from "@/redux/api/categoryApi";
import { getUserInfo } from "@/utils/local.storeage";
import { useCreateServiceMutation } from "@/redux/api/serviceApi";
import BreadCumbUI from "@/components/ui/BreadCumbUI";

const onFinishFailed = (errorInfo: any) => {
  console.log("Failed:", errorInfo);
};

type FieldType = {
  title: string;
  details: string;
  price: string;
  address: string;
  contact?: string;
  img: string;
  serviceTime: string;
  serviceDate: string;
  status: "upcoming" | "available" | "sold";
  categoryId: string;
  publisherId: string;
};

const CreateServicePage = () => {
  const router = useRouter();
  const [createService] = useCreateServiceMutation();
  const adminData = getUserInfo() as any;
  console.log(adminData, "admin Data");
  //   const [userSignUp] = useUserSignUpMutation();
  const { data, isLoading } = useCategoriesQuery({ page: 1, limit: 20 });

  console.log("🚀 ~ file: page.tsx:40 ~ CreateServicePage ~ data:", data);

  const CategoryData = data?.category;
  const CategoryOptions = CategoryData?.map((item: any) => {
    return {
      label: item?.title,
      value: item?.id,
    };
  });

  const onFinish = async (values: any) => {
    message.loading("creating service")
    const file = values.img.file.originFileObj;

    values["publisherId"] = adminData?.id;

    try {
      const data = await uploadImgCloudinary(file);

      values.img = data;
      // console.log(values);
      // console.log("newValue", values);
    
      const res = await createService({ ...values }).unwrap();
      // console.log(res, "service response");
      if (res) {
        message.success("successfully created Service");
        router.push("/admin/service");
      }
    } catch (error) {
      console.error("Error in onFinish the service create", error);
    }
  };

  return (
    <div className="mt-3 ">
      <BreadCumbUI
        items={[
          {
            label: "service",
            link: "/admin/service",
          },
          {
            label: "Create Service",
            link: "/admin/service/create",
          },
        ]}
      />
      <Form
        name="basic"
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 20 }}
        labelAlign="left"
        labelWrap={true}
        className="w-full lg:w-[55%] my-1 mx-auto h-screen   pl-5"
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <h2 className="text-[2rem] font-extrabold mb-3  fon-serif">
          Create Service
        </h2>
        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Title</span>}
          name="title"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your Title!" }]}
        >
          <Input placeholder="Service title" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Address</span>}
          name="address"
          // className="w-full py-1 input"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input service Address!" }]}
        >
          <Input placeholder="Service Address" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Details</span>}
          labelAlign="left"
          name="details"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your Details!" }]}
        >
          <Input.TextArea placeholder="Details of the services" />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Contact</span>}
          name="contact"
          // className="w-full py-1 input"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your Contact!" }]}
        >
          <Input placeholder="Your Contact" type="number" />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Price</span>}
          name="price"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your P" }]}
        >
          <Input placeholder="product Price" type="number" />
        </Form.Item>

        <Form.Item
          label={<span className="text-[1.2em] font-medium">Category</span>}
          name="categoryId" // Make sure the name matches the key you want to access.
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your Category" }]}
        >
          <Select options={CategoryOptions as any} />
        </Form.Item>

        <Form.Item
          label={<span className="text-[1.2em] font-medium">Status</span>}
          name="status" // Make sure the name matches the key you want to access.
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your Category" }]}
        >
          <Select
            //   defaultValue="lucy"
            options={[
              {
                label: "Upcoming",
                value: "upcoming",
              },
              {
                label: "available",
                value: "available",
              },
            ]}
          />
        </Form.Item>

        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Select Time</span>}
          name="serviceTime"
          // className="w-full py-1 input"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your Time!" }]}
        >
          {/* <TimePicker format={"HH:mm"} /> */}
          <Input type="Time" />
        </Form.Item>
        <Form.Item<FieldType>
          label={<span className="text-[1.2em] font-medium">Select Date</span>}
          name="serviceDate"
          // className="w-full py-1 input"
          className="w-full py-1 input"
          rules={[{ required: true, message: "Please input your  Date !" }]}
        >
          <Input type="Date" />
        </Form.Item> 

        {/* //! Upload.... */}
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

        <Form.Item wrapperCol={{  span: 8 }}>
          <Button block type="primary" htmlType="submit">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateServicePage;
