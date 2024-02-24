import { Button, Card, Col, Image as ImageAnt, Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "./Button/AddToCartButton";
import { getUserInfo } from "@/utils/local.storeage";

import { ShoppingCartOutlined } from "@ant-design/icons";

const SingleService = ({ product }: { product: any }) => {
  const { id, img, title, price } = product;

  const userInfo = getUserInfo() as any;

  return (
    <Col style={{ background: "", }} xs={24} sm={24} md={12} lg={6}>
      {/* <Card
        // hoverable
        style={{ width: 310, height: 376, marginInline: "auto" }}
        cover={
          <Image
            // className="transform transition-transform delay-300 hover:scale-110"
            src={img}
            // height={230}
            // width={120}
            style={{ height: "230px", width: "10-%" }}
            preview={false}
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
            padding: "0px",
            width: "100%",
            margin: "0 0 10px 0",
            // flexDirection: "column",
          }}
        >
          <AddToCartButton service={product}></AddToCartButton>
          <div className="align-baseline text-right">
            <p className="font-mono font-medium text-right">${price}</p>
            <Rate
              count={5}
              style={{

                textAlign: "right",
                fontSize: "16px"
              }}
              defaultValue={
                product?.reviews?.length > 1 ? product?.reviews?.length : 4
              }
              allowHalf
              disabled
            />
          </div>
        </section>

        <Link href={`/services/${id}`}>
          <Button className="bg-primary text-white font-medium" block>
            Details
          </Button>
        </Link>
      </Card> */}
      <div className="">
        <Image height={300} width={350} className="group-hover:opacity-60 transition duration-500 w-full" src={img} alt="sofa-2" />
        <div className="sm:py-28 py-36 px-10 group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50  flex justify-center items-center">
          <div className="absolute sm:top- top-3 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
            <div>
              <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">{title}</p>
            </div>
            <div>
              <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800">${price}</p>
            </div>
          </div>
          <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
            <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
            <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
          </div>
          <div className="flex flex-col bottom-8 right-8 space-y-4 absolute opacity-100 group-hover:bg-opacity-90 transition duration-500">
            <AddToCartButton service={product}></AddToCartButton>
         
            <Link href={`/services/${id}`}>
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="#1F2937" />
                <path
                  d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z"
                  fill="#1F2937"
                />
              </svg>
            </Link>
            <button>
              <svg width={24} height={24} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z"
                  fill="#1F2937"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default SingleService;
