"use client";
import React, { useRef, useEffect } from "react";

import { Button, Typography } from "antd";
import Link from "next/link";
import Logo from "../ui/Logo";
import banner from "@/assets/offices.jpg"
// import bannerVideo from "@/assets/banner/bannerVideo.mp4"

import { EnvironmentOutlined, LineChartOutlined, BookOutlined } from "@ant-design/icons";

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

  const cardData = [
    { title: "Our Office", description: "Lorem ipsum dolor sit amet, iusto quando vocibus te vim no mea.", details: "" },
    { title: "WHAT WE DO", description: "Lorem ipsum dolor sit amet, iusto quando vocibus te vim no mea.", details: "" },
    {
      title: "OUR PROJECT", description: "Duo erat iriure inciderint no, pro ad decore laudem. Lorem ipsum.", details: ""
    },
  ]

  return (
    <div className="-mt-[4rem] lg:-mt-[5.6rem] relative">

      <div className="relative">
        <video
          className="w-full h-[20rem] lg:h-[52rem] object-cover"
          autoPlay
          ref={videoRef}
          loop
          muted
          src="https://res.cloudinary.com/dwaiudyzc/video/upload/v1708758334/bannerVideo_a5tcfx.mp4"
        />

        <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
          <h1 className="text-xl lg:text-8xl font-bold uppercase"> Decorate your WorkSpace</h1>
        </div>

        {/* //!  card section */}
        <div className="bg-white -mt-[5rem] container mx-auto grid grid-cols-1 lg:grid-cols-3 py-3 ">
          {
            cardData?.map((card) => {

              return <div className="border border-white px-4 py-7 shadow-lg" style={{ backgroundColor: '#ffffff' }} key={card?.title}>
                <div className="flex flex-col items-center justify-center gap-2">
                  <div className="">
                    <span className="" data-color="#231f20">
                      <EnvironmentOutlined style={{ color: '#231f20', fontSize: '58px' }} />
                    </span>
                  </div>
                  <div className="">
                    <h5 className="" style={{ color: '#252525', marginTop: '6px' }}>
                      <span className="">WHAT WE DO</span>
                    </h5>
                    <p className="" style={{ color: '#585858' }}>
                      Eum cu probatus delicata. Eruditi conclu daturque est an, affert.
                    </p>
                  </div>
                  <div className="  ">
                    <div className=""></div>
                  </div>
                </div>
              </div>


            })
          }

        </div>

      </div>

    </div>

  );
};

export default BannerHome;
