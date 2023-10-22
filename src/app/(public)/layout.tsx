import Header from "@/components/ui/Header";
import Navbar from "@/components/Navbar/Navbar";
import React from "react";
import Footer from "@/components/ui/Footer";

const PublicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      <Navbar></Navbar>
      <section style={{padding:"0 2rem",minHeight:"100vh",margin:"1rem 0"}}>{children}</section>
      <Footer />
    </div>
  );
};

export default PublicLayout;
