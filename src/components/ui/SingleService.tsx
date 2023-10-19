import { BookOutlined } from "@ant-design/icons";
import { Button, Card, Col, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./Button/AddToCartButton";

const SingleService = ({ product }: { product: any }) => {
  const { id, img, title, price } = product;
  console.log(product, "");

  return (
    <Col
      style={{ background: "white" }}
  
      xs={24}
      sm={24}
      md={12}
      lg={8}
    >
      <Card
        hoverable
        style={{ width: 310,height:470 }}
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
        
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginInline: "0px",
            paddingInline: "0px",
            width: "100%",
            margin: "0 0 10px 0",
          }}
        >
          <div className="bg-primary">
            <AddToCartButton service={product}></AddToCartButton>
          </div>
          <div className="align-baseline text-right">
            <h4 className="text-[16px]">{title}</h4>
          
            <Rate
              count={5}
              style={{
                height:"7px"
              }}
              defaultValue={
                product?.reviews?.length > 1 ? product?.reviews?.length : 4
              }
              allowHalf
              disabled
            />
              <p className="font-mono">${price}</p>
          </div>
        </section>
        {/* <div
          style={{
            marginBlock: "10px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <AddToCartButton service={product}></AddToCartButton>

          <Link href={`/user/booking/${id}`}>
            <Button type="default" icon={<BookOutlined />}>
              Book
            </Button>
          </Link>
        </div> */}
        <Link href={`/services/${id}`}>
          <Button  className="bg-primary text-white font-medium" block>
            Details
          </Button>
        </Link>
      </Card>


    </Col>
  );
};

export default SingleService;
