"use client";
import React from "react";
import { Button, Image, Typography } from "antd";
import Link from "next/link";
import Logo from "../ui/Logo";

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
    <div className="">
      <div className="lg:shadow-2xl py-12 lg:py-32 mt rounded-md">
        <div
          style={{
            textAlign: "center",
            // padding: "0.8rem 1.5rem",
            color: "black",
            // backgroundColor: "#4BB4B4",
            marginBottom: "0px",
          }}
        >
          <Title
            style={{
              fontSize: "2.7rem",
              color: "black",
              fontWeight: "700",

              // fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
            }}
          >
            Decorate Your Interior with
            <p className="tex-3xl font-bold text-primary">Ordin</p>
          </Title>
        </div>
        <div
          style={{
            textAlign: "center",
            padding: "0 2rem",
            // background: "red",
            marginTop: "0px",
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
            Our team of experts is here to help you with all your interior .
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
          <Link href="/login" style={{ ...buttonStyle }}>
            Get Started
          </Link>
          <Link
            href="/about-us"
            style={{
              padding: "1rem 2rem",
              //  backgroundColor: "#4BB4B4",

              color: "#4BB4B4",
              textDecoration: "none",
              borderRadius: "5px",
              margin: "0 1rem",
              fontSize: "1rem",
              transition: "color 0.1s",
              border: "1px solid ",
            }}
          >
            Learn More
          </Link>
        </div>
      
      </div>
      <section className="text-center hidden lg:flex justify-center -mt-[5rem] mx-auto">
      <Image preview={false}  className="w-[85vw] h-[65vh] rounded-md mx-auto" src="https://img.freepik.com/free-photo/interior-design-with-photoframes-white-couch_23-2149385438.jpg?w=826&t=st=1698266311~exp=1698266911~hmac=57d0854d8b5336cf86500383baef1151bd26012642e419dc0403e0bcd0f7691f" alt="a"  />
      </section>
      
    </div>
  );
};

export default TopPage;
