"use client";

import { useCreateCartMutation } from "@/redux/api/cartApi";
import { getUserInfo } from "@/utils/local.storeage";
import { BookTwoTone, ShoppingCartOutlined } from "@ant-design/icons";
import { Button, message } from "antd";
import { useRouter } from "next/navigation";
import React from "react";

const AddToCartButton = ({ service }: { service: any }) => {
  const isUser = getUserInfo() as any;
  const router = useRouter();
  const [createCart] = useCreateCartMutation();

  const addToCart = async (cartData: any) => {
    if (!isUser?.id) {
      message.info("login please");
      router.push("/login");
      return;
    }
    const cartCreateData = {
      userId: isUser?.id,
      serviceId: cartData?.id,
    };
    try {
      message.loading("adding to cart.........");
      const response = (await createCart({ ...cartCreateData })) as any;
      // console.log(response);
      if (response?.data) {
        message.success("Added Cart");
      } else {
        message.error("Can not add the cart");
      }
    } catch (error) {
      console.log("🚀 ~ file: page.tsx ~ addToCart ~ error:", error);
    }
  };

  return (
    // <Button
    //   onClick={() => addToCart(service)}
    //   // type="primary"
    //   // defaultColor={"#4BB4B4"}
    //   // style={{
    //   //   // backgroundColor: "#4BB4B4",
    //   //   borderColor: "#4BB4B4",
    //   //   color: "white",
    //   //   borderRadius: "5px",
    //   // }}

    //   icon={<ShoppingCartOutlined style={{
    //     background: "",
    //     color: "black",
    //     fontSize: "22px",
    //   }} />}
    // // icon={<i className="fas fa-shopping-cart"></i>}
    // >
    //   Cart
    // </Button>
    <div onClick={() => addToCart(service)}  className="">
      <ShoppingCartOutlined style={{
        background: "",
        color: "black",
        fontSize: "22px",
      }} />
    </div>
  );
};

export default AddToCartButton;
