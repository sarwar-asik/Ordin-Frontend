"use client";
import React from "react";
import { Button, Typography } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const TopPage = () => {
 

  const buttonStyle = {
    // display: "inline-block",
    padding: "1rem 2rem",
    backgroundColor: "#4BB4B4",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    margin: "0 1rem",
    fontSize: "1rem",
    transition: "backgroundColor 0.3s",
   
  };
  return (
    <div className=" py-6 mt-7">
      <div
        style={{
          textAlign: "center",
          padding: "0.8rem 1.5rem",
          color: "black",
          //   backgroundColor: "#4BB4B4",
        }}
      >
        <Title
          style={{
            fontSize: "2.5rem",
            color: "black",
            fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
          }}
        >
       Best  Interior Design 
        </Title>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "0 2rem",
        }}
      >
        <Paragraph
          style={{
            fontSize: "1.2rem",
            color: "#333",
            maxWidth: "600px",
            margin: "0 auto",
          //  fontFamily: 'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          Welcome to our interior design service! We are dedicated to
          transforming your space into a beautiful and functional environment.
          Our team of experts is here to help you with all your interior design
          needs.
        </Paragraph>
      </div>
      <div
        // style={{
          // textAlign: "center",
          // marginTop: "2rem",
        //   padding:"0.7em 0",
        //   display:"flex",
        //   flexDirection:"column",
          
        // }}
        className="text-center mt-[2rem] py-[0.7rem]   flex lg:inline-block  flex-col  justify-center gap-2   w-full"
      >
        <Link href="/login" style={{...buttonStyle}}>
          Get Started
        </Link>
        <Link href="/about-us" style={{
           padding: "1rem 2rem",
          //  backgroundColor: "#4BB4B4",

           color: "#4BB4B4",
           textDecoration: "none",
           borderRadius: "5px",
           margin: "0 1rem",
           fontSize: "1rem",
           transition: "color 0.1s",
           border:"1px solid ",
          
        }}>
          Learn More
        </Link>
      </div>
    </div>
  );
};

export default TopPage;
