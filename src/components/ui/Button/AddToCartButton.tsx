"use client";

import { useCreateCartMutation } from "@/redux/api/cartApi";
import { getUserInfo } from "@/utils/local.storeage";
import { BookTwoTone, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import React from "react";

const AddToCartButton = ({ service }: { service: any }) => {
  const isUser = getUserInfo() as any;
  const [createCart] = useCreateCartMutation();

  const addToCart = async (cartData: any) => {
    const cartCreateData = {
      userId: isUser?.id,
      serviceId: cartData?.id,
    };
    try {
      const response = (await createCart({ ...cartCreateData })) as any;
      console.log(response);
      if (response?.data) {
        message.success("Success");
      } else {
        message.error("Can not add double");
      }
    } catch (error) {
      console.log("🚀 ~ file: page.tsx ~ addToCart ~ error:", error);
    }
  };

  return (
    <Button
      onClick={() => addToCart(service)}
      type="primary"
      icon={<ShoppingCartOutlined />}
      // icon={<i className="fas fa-shopping-cart"></i>}
    >
      Add Cart
    </Button>
  );
};

export default AddToCartButton;
