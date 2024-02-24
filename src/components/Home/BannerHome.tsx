"use client";
import React, { useRef, useEffect } from "react";

import { Button, Typography } from "antd";
import Link from "next/link";
import Logo from "../ui/Logo";
import banner from "@/assets/offices.jpg"
// import bannerVideo from "@/assets/banner/bannerVideo.mp4"

import Image from "next/image";

const { Title, Paragraph } = Typography;

const BannerHome = () => {
  const buttonStyle = {
    // display: "inline-block",
    padding: "1rem 2rem",
    // backgroundColor: "#4BB4B4",
    border: "1px solid",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    margin: "0 1rem",
    fontSize: "1rem",
    transition: "border 0.3s",

  };
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    // Access the video element through the ref
    const videoElement = videoRef.current;

    if (videoElement) {
      // Set the playback rate to increase speed (e.g., 1.5 for 1.5x speed)
      videoElement.playbackRate = 1.9; // You can adjust this value as needed
    }
  }, []);

  return (
    <div className="-mt-[4rem] lg:-mt-[5.6rem] ">

      <div className="">
        <video
          className="w-full h-[38rem object-cover"
          autoPlay
          ref={videoRef}
          loop
          muted
          // src="https://res.cloudinary.com/dce4t5emk/video/upload/v1702898386/jtdswsajgic87bnqyclj.mp4"

          src="https://res.cloudinary.com/dwaiudyzc/video/upload/v1708758334/bannerVideo_a5tcfx.mp4"

        // src={bannerVideo}
        />
      </div>

      {/* <div className=" bg-slate-200 lg:shadow- py-12 lg:pb-32 mt rounded-md">
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
            <span>Decorate Your Interior with</span>
            <br />
            <span className="tex-3xl font-bold text-primary">Ordin</span>
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
            <Link
            href="/about-us"
            className="text-primary hover:bg-primary  hover:text-white"
            style={{
              padding: "1rem 2rem",
              //  backgroundColor: "#4BB4B4",

              // color: "#E3364E",
              textDecoration: "none",
              borderRadius: "5px",
              margin: "0 1rem",
              fontSize: "1rem",
              transition: "color 0.1s",
              border: "1px solid ",
            }}
          >
            Get Started
          
          </Link>
          <Link href="/login" className="bg-primary hover:text-primary  hover:bg-slate-200" style={{ ...buttonStyle }}>
          Learn More
          </Link>
        
        </div>
      
      </div>
      <section className="text-center hidden lg:flex justify-center -mt-[5rem] mx-auto">
      <Image height={65} width={85}   className="w-[84vw] h-[65vh] rounded-md mx-auto" 
      // src="http://localhost:3000/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdwaiudyzc%2Fimage%2Fupload%2Fv1697736781%2Foffices_kjkjc8.jpg&w=256&q=75" 
      // preview={false}
      src={banner}
      unoptimized
      alt="a"  />
      </section> */}

    </div>
  );
};

export default BannerHome;
