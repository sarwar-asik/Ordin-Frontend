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
    <div className="container mx-auto">
      <section className="mb-7 text-center">
        <h1 className=" text-[2.3rem] font-serif uppercase text-[#4d4c4c]">Trusted By</h1>
        <p className="mt-3 font-medium font-sans text-[#5f5d5d]">
          We provided some familiar company in worldWide . These company showroom and other branch <br /> interior designed by our expertise designers .
        </p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-4 gap-1 container mx-auto shadow my-3 pb-[10px]">

        {companyData?.map((item: any) => (
          <div className="px-5 py-9  hover:shadow-xl hover:translate-y-2 transition-transform duration-75  text-center grayscale hover:grayscale-0" key={item?.name}>
            <Image
              height={150}
              width={160}

              src={item?.img}
              className="max-w-[300p]"
              style={{
                // filter: "grayscale(100%) contrast(100%) brightness(100%)",
              }}
              alt="trust"
            />
          </div>
        ))}

      </section>
    </div>
  );
};

export default TrustedBy;
