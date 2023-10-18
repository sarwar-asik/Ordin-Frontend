import Header from "@/components/ui/Header";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import AvailableService from "@/components/Home/AvailableService";
import Footer from "@/components/ui/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Navbar />
      <AvailableService />
      <h2>main routes</h2>
      <Footer/>
    </div>
  );
};

export default HomePage;
