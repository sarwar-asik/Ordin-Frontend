import Header from "@/components/ui/Header";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import ServicePage from "./(public)/services/page";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <Header></Header>
      <Navbar />
      <ServicePage />
      <h2>main routes</h2>
    </div>
  );
};

export default HomePage;
