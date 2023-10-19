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
      <section style={{padding:"0 1vw"}}>
        <AvailableService />
      </section>
      <Footer />
    </div>
  );
};

export default HomePage;
