import React from "react";
import walton from "@/assets/company/walton.png";
import brack from "@/assets/company/brack.png";
import bs from "@/assets/company/bf.png";
import bat from "@/assets/company/bat.png";
import arla from "@/assets/company/arla.png";
import apex from "@/assets/company/apex.png";
import bgmal from "@/assets/company/bgmal.png";
import com from "@/assets/company/com.png";
import unity from "@/assets/company/unity.png";
import global from "@/assets/company/prestige_global.png";
import dhaka_bank from "@/assets/company/dhakaB.png";
import emirate from "@/assets/company/emirate.png";


import Image from "next/image";
import { Col, Row } from "antd";

const TrustedBy = () => {
  const companyData = [
    { name: "walton", img: walton },
    { name: "brack", img: brack },
    { name: "bs", img: bs },
    { name: "bat", img: bat },
    { name: "arla", img: arla },
    { name: "apex", img: apex },
    { name: "bgmal", img: bgmal },
    { name: "com", img: com },
    { name: "unity", img: unity },
    { name: "global", img: global },
    { name: "dhaka_bank", img: dhaka_bank },
    { name: "emirate", img: emirate },
  ];

  return (
    <div>
      <section className="mb-7 text-center">
        <h1 className=" text-[2.3rem]  my-3">Trusted By</h1>
        <p className="mt-3 font-medium font-sans">
          We provided some familiar company in worldWide . These company showroom and other branch <br/> interior designed by our expertise designers .
        </p>
      </section>

      <section>
        <Row justify="center" gutter={[20,10]}>
          {companyData?.map((item: any) => (
            <Col sm={12} md={8} lg={4} key={item?.name}>
              <Image
                height={100}
                width={150}
                src={item?.img}
                style={{
                  filter: "grayscale(100%) contrast(200%) brightness(120%)",
                }}
                alt="trust"
              />
            </Col>
          ))}
        </Row>
      </section>
    </div>
  );
};

export default TrustedBy;
