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
import {
  useServicesQuery,
  useSingleServiceQuery,
  useUpdateServiceMutation,
} from "@/redux/api/serviceApi";

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

const UpdateServicePage = ({ params: { id } }: { params: { id: string } }) => {

  const router = useRouter();
  const [updateService] = useUpdateServiceMutation()
  const adminData = getUserInfo() as any;

  const { data: defaultServiceData, isLoading } = useSingleServiceQuery(id);

  const { data } = useCategoriesQuery({ page: 1, limit: 20 });

  const CategoryData = data?.category;
  const CategoryOptions = CategoryData?.map((item: any) => {
    return {
      label: item?.title,
      value: item?.id,
    };
  });

  const onFinish = async (values: any) => {

    if (values.img?.file?.originFileObj) {
      const file = values.img.file.originFileObj;
      const data = await uploadImgCloudinary(file);
    
      values.img = data;
    } else {
      values.img = defaultServiceData?.img;

    }
    try {
   

        const res = await updateService({ values,id }).unwrap();
        // console.log(res, "service update response");
        if (res) {
          message.success("successfully created Service");
          router.push("/admin/service");
        }
    } catch (error) {
      console.error("Error in onFinish the service create", error);
    }
  };

  if (isLoading) {
    return <h2>Loading Service data........</h2>;
  }

  //  const status ="upcoming"

  return (
    <div className="shadow-xl block p-2 ">
      <h4>
        Go <Link href="/admin/service">Service page</Link>
      </h4>

      <Form
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        labelAlign="left"
        labelWrap={true}
        initialValues={{ remember: true }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        className=" w-full lg:w-4/6 mx-auto lg:mx-auto shadow-lg p-2"
      >
        <h2
          style={{
            marginTop: "0.5rem",
            marginBottom: "0.75rem",
            fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
            fontSize: "1.5rem",
            lineHeight: "2rem",
          }}
        >
          Update Service
        </h2>
        <Form.Item
          name="title"
          label={
            <span style={{ fontSize: "1.2em", fontWeight: "normal" }}>
              Title
            </span>
          }
          labelAlign="left"
          initialValue={defaultServiceData?.title}
          rules={[{ required: true, message: "Please input your Title!" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          name="address"
          label="Address"
          rules={[{ required: true, message: "Please input your Address!" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
          initialValue={defaultServiceData?.address}
        >
          <Input placeholder="Your Name" />
        </Form.Item>
        <Form.Item
          name="details"
          label="Details"
          initialValue={defaultServiceData?.details}
          rules={[{ required: true, message: "Please input your Details!" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Input.TextArea placeholder="Details of the services" />
        </Form.Item>
        <Form.Item
          name="contact"
          label="Contact"
          initialValue={defaultServiceData?.contact}
          rules={[{ required: true, message: "Please input your Contact!" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Input placeholder="Your Contact" type="number" />
        </Form.Item>
        <Form.Item
          name="price"
          initialValue={defaultServiceData?.price}
          label="Price"
          rules={[{ required: true, message: "Please input your Price" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Input placeholder="Product Price" type="number" />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          initialValue={defaultServiceData?.status}
          rules={[{ required: true, message: "Please input your Status" }]}
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
                label: defaultServiceData?.status,
                value: defaultServiceData?.status,
              },
              {
                label:
                  defaultServiceData?.status === "available"
                    ? "upcoming"
                    : "available",
                value:
                  defaultServiceData?.status === "available"
                    ? "upcoming"
                    : "available",
              },
            ]}
          />
        </Form.Item>

        <Form.Item
          name="categoryId"
          label="Category"
          initialValue={defaultServiceData?.categoryId}
          rules={[{ required: true, message: "Please input your Category" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Select options={CategoryOptions as any} />
        </Form.Item>
        <Form.Item
          name="serviceTime"
          label="Select Time"
          initialValue={defaultServiceData?.serviceTime}
          rules={[{ required: true, message: "Please input your Time!" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Input type="time" />
        </Form.Item>
        <Form.Item
          name="serviceDate"
          label="Select Date"
          initialValue={defaultServiceData?.serviceDate}
          rules={[{ required: true, message: "Please input your Date!" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
        >
          <Input type="date" />
        </Form.Item>
        <Form.Item
          name="img"
          initialValue={defaultServiceData?.img}
          rules={[{ required: true, message: "Please Select the Image" }]}
          style={{
            width: "100%",
            padding: "1rem",
            marginBottom: "1rem",
          }}
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
                url: defaultServiceData?.img, // The URL of the default image
              },
            ]}
          >
            <Button>Upload</Button>
          </Upload>
        </Form.Item>
        <Form.Item wrapperCol={{ span: 8 }}>
          <Button block type="primary" htmlType="submit">
            Update
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdateServicePage;
