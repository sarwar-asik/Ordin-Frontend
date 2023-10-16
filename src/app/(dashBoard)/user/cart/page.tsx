"use client"

import { useCartsQuery, useDeleteCartMutation } from "@/redux/api/cartApi";
import { Button, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartPage = () => {
const {data,isLoading} = useCartsQuery({page:1})
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
      <h2>Your Cart </h2>

      <section className="mt-2 ">
        {
          data?.carts?.map((cart:any,i)=>{
            const service = cart?.service
          return <div key={i+1} className="shadow-lg px-2 py-3 flex justify-between items-cente rounded max-w-[36rem] mx-auto">
            <section>
              <Image className="rounded" src={service?.img} height={140} width={200} alt="cart" />
            </section>

            <section className="flex flex-col">
              <h3>{service?.title}</h3>
              <h5>Price: {service?.price}</h5>
              <h5>Contact:{service?.contact}</h5>
              <h5>Address:{service?.address}</h5>
              <h5>Service Date:{service?.serviceDate}</h5>
            </section>

            <section className="flex flex-col gap-2">
              <Link href={`/user/booking/${service?.id}`} className="bg-primary p-2 font-bold rounded text-white">Book</Link>
              <Button onClick={()=>removeCartHandler(cart)} type="primary" danger>Remove</Button>
              
            </section>

          </div>
          })
        }
      </section>

    </div>
  );
};

export default CartPage;
