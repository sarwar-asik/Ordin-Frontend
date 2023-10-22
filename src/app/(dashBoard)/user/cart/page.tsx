"use client"

import BreadCumbUI from "@/components/ui/BreadCumbUI";
import LoadingData from "@/components/ui/Loader/LoadingData";
import SingleCart from "@/components/ui/SingleCart";
import { useUserBookingQuery } from "@/redux/api/bookingApi";
import { useCartsQuery, useDeleteCartMutation } from "@/redux/api/cartApi";
import { Button, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartPage = () => {
  
const {data,isLoading} = useCartsQuery({page:1})
// console.log("🚀 ~ file: page.tsx:12 ~ CartPage ~ data:", data)


const [deleteCart] = useDeleteCartMutation()
//  console.log("🚀 ~ file: page.tsx:7 ~ CartPage ~ data:", data)

const removeCartHandler =async(cartData:any)=>{
  try {
 const response = await deleteCart(cartData?.id) as any
 console.log(response);
 if(response?.data){
  message.error("deleted cart")
 }else{
 message.error("failed to delete")
 }
  // console.log(cartData,"cartData");
} catch (error) {
  console.log("🚀 ~ file: page.tsx:17 ~ removeCartHandler ~ error:", error)
  
}
}


  return (
    <div>
      <BreadCumbUI
        items={[
          {
            label: "user",
            link: "/profile",
          },
          {
            label: "cart",
            link: "/user/cart",
          },
        ]}
      />
      <h2 style={{textAlign:"center",fontSize:"3em",marginBlock:"1em"}}>Your Cart </h2>
      {
        isLoading && <LoadingData/>
      }

      <section className="mt-2 ">
        {
          data?.carts?.map((cart:any)=>{
            const service = cart?.service
          return <SingleCart key={cart?.service?.title} cart={cart} removeCartHandler={removeCartHandler}/>
          })
        }
      </section>

    </div>
  );
};

export default CartPage;
