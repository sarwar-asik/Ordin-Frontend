import Header from "@/components/ui/Header";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "@/components/ui/Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {/* <Header /> */}
      <Navbar></Navbar>
      <section style={{ minHeight: "100vh", margin: "auto", padding: "2vh 5vw", }}>{children}</section>
      <Footer />
    </div>
  );
};

export default PublicLayout;
