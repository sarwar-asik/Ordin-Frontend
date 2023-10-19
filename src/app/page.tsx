import Header from "@/components/ui/Header";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import AvailableService from "@/components/Home/AvailableService";
import Footer from "@/components/ui/Footer";
import CategoriesPage from "./(public)/categories/Page";
import ServiceTabs from "@/components/Home/ServiceTab";
import TopPage from "@/components/Home/TopPage";
import SurveyOverviewPage from "@/components/Home/Servey";
import BlogPage from "@/components/Home/Blogs";
import ReviewsPage from "@/components/Home/Rating";
import HeroOne from "@/components/ui/Hero1";

const HomePage = () => {
  return (
    <div className="min-h-s">
      <Header></Header>
      <Navbar />
      {/* //! Content */}
      <section style={{padding:"2vh 5vw"}}>
        <TopPage></TopPage>
        <CategoriesPage/>
        <HeroOne/>
        <ServiceTabs/>

        <SurveyOverviewPage/>
      <BlogPage/>
      <ReviewsPage/>
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
