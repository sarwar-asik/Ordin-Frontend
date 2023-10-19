import { BookOutlined } from "@ant-design/icons";
import { Button, Card, Col, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./Button/AddToCartButton";
import { getUserInfo } from "@/utils/local.storeage";

const SingleService = ({ product }: { product: any }) => {
  const { id, img, title, price } = product;
  // console.log(product, "");
  const userInfo = getUserInfo() as any;

  return (
    <Col style={{ background: "white" }} xs={24} sm={24} md={12} lg={8}>
      <Card
        hoverable
        style={{ width: 310, height: 470 }}
        cover={
          <Image
            // className="transform transition-transform delay-300 hover:scale-110"
            src={img}
            height={300}
            width={120}
            // style={{ height: "200px"}}
            alt={title}
          />
        }
      >
        <h4 className="text-[16px] text-right">{title}</h4>

        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginInline: "0px",
            paddingInline: "0px",
            width: "100%",
            margin: "0 0 10px 0",
            flexDirection:"column",
        
          }}
        >
          <p  className="font-mono font-medium text-right">${price}</p>
          <div className="align-baseline text-right">
            <Rate
              count={5}
              style={{
                height: "7px",
                textAlign: "right",
              }}
              defaultValue={
                product?.reviews?.length > 1 ? product?.reviews?.length : 4
              }
              allowHalf
              disabled
            />
          </div>
          <AddToCartButton service={product}></AddToCartButton>
        </section>

           
        {/* <div  className="bg-primary my-2 rounded-md">
          </div> */}

        <Link href={`/services/${id}`}>
          <Button className="bg-primary text-white font-medium" block>
            Details
          </Button>
        </Link>
      </Card>
    </Col>
  );
};

export default SingleService;
