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
  console.log("🚀 ~ file: page.tsx:4 ~ UpdateServicePage ~ id:", id);

  return (
    <div>
      <h1>{id}</h1>
    </div>
  );
};

export default UpdateServicePage;
