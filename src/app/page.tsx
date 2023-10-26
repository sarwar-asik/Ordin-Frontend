"use client";
import Header from "@/components/ui/Header";
import Navbar from "@/components/Navbar/Navbar";
import React, { useState } from "react";
import AvailableService from "@/components/Home/AvailableService";
import Footer from "@/components/ui/Footer";
import CategoriesPage from "./(public)/categories/Page";
import ServiceTabs from "@/components/Home/ServiceTab";
import TopPage from "@/components/Home/TopPage";
import SurveyOverviewPage from "@/components/Home/Servey";
import BlogPage from "@/components/Home/Blogs";
import ReviewsPage from "@/components/Home/Rating";
import HeroOne from "@/components/ui/Hero1";
import HeroTwo from "@/components/Home/HeroTwo";
import {
  CommentOutlined,
  CustomerServiceOutlined,
  QuestionCircleOutlined,
} from "@ant-design/icons";

import { FloatButton, Switch } from "antd";
import TrustedBy from "@/components/Home/TrustedBy";
import FAQPage from "@/components/Home/FAQ";

const HomePage = () => {
  const [open, setOpen] = useState(true);

  const onChange = (checked: boolean) => {
    setOpen(checked);
  };
  return (
    <div className="min-h-s">
      <Header></Header>
      <Navbar />
      {/* //! Content */}
      <section
        style={{
          padding: "2vh 5vw",
          display: "flex",
          flexDirection: "column",
          gap: "6rem",
        }}
      >
        {/*//! Float Icon */}
        <FloatButton.Group
          trigger="click"
          type="primary"
          style={{ right: 24 }}
          icon={<CommentOutlined />}
        >
          <FloatButton icon={<CustomerServiceOutlined />} />

          <FloatButton
            badge={{ count: 12 }}
            icon={<QuestionCircleOutlined />}
          />
          <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>


        <TopPage></TopPage>
        <CategoriesPage />
        <HeroOne />
        <TrustedBy></TrustedBy>
        <ServiceTabs />
        <BlogPage />
        <ReviewsPage />
        <HeroTwo></HeroTwo>
        {/* <SurveyOverviewPage/> */}
        <FAQPage></FAQPage>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
