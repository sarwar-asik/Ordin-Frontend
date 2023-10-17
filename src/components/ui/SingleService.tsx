import { useCreateCartMutation } from "@/redux/api/cartApi";

import { getUserInfo } from "@/utils/local.storeage";
import { Button, Card, Col, message } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SingleService = ({ product }: { product: any }) => {
  const isUser = getUserInfo() as any;
  const [createCart] = useCreateCartMutation();
 
  const { img, title, price, contact, address, serviceTime } = product;

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
    <Col key={title} xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        style={{ width: 300, margin: "16px" }}
        cover={
          <Image
            src={img}
            height={200} width={200}
            style={{ height: "150px", marginInline: "auto" }}
            alt={title}
          />
        }
      >
        <div>
          <h3>{title}</h3>
          <p>Price: {price}</p>
          <p>Contact: {contact}</p>
          <p>Address: {address}</p>
        </div>
        <div
          style={{
            marginBlock: "10px",
            display: "flex",
            justifyContent: "space-between",
          
          }}
        >
          <Button
            onClick={() => addToCart(product)}
            type="primary"
            // icon={<i className="fas fa-shopping-cart"></i>}
          >
            Add to Cart
          </Button>
          <Button type="default" icon={<i className="fas fa-calendar-alt"></i>}>
            Book
          </Button>
        </div>
        <Link href={`/services/${product?.id}`}>
        <Button type="primary" block>Details</Button></Link>
        
      </Card>
    </Col>
  );
};

export default SingleService;
