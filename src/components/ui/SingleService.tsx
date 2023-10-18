
import { BookOutlined } from "@ant-design/icons";
import { Button, Card, Col} from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./Button/AddToCartButton";

const SingleService = ({ product }: { product: any }) => {
  const { id, img, title, price, contact, address, serviceTime } = product;

  return (
    <Col key={title} xs={24} sm={12} md={8} lg={6}>
      <Card
        hoverable
        // style={{ width: 300, margin: "16px" }}
        cover={
          <Image
            src={img}
            height={230}
            width={200}
            style={{ height: "200px"}}
            alt={title}
          />
        }
      >
        <div>
          <h3>{title}</h3>
          <p>Price: ${price}</p>
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
          <AddToCartButton service={product}></AddToCartButton>

          <Link href={`/user/booking/${id}`}>
            <Button type="default" icon={<BookOutlined />}>
              Book
            </Button>
          </Link>
        </div>
        <Link href={`/services/${id}`}>
          <Button type="primary" block>
            Details
          </Button>
        </Link>
      </Card>
    </Col>
  );
};

export default SingleService;
