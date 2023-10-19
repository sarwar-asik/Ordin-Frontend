import Image from "next/image";
import Link from "next/link";
import React from "react";
import NotFImg from "@/assets/notFoun.jpg";


const imageStyle = {
  maxWidth: "100%",
  maxHeight: "200px",
  marginBottom: "20px",
};

const headingStyle = {
  fontSize: "1.5rem",
  marginBottom: "10px",
};

const paragraphStyle = {
  fontSize: "1rem",
  marginBottom: "20px",
};

const linkStyle = {
  color: "#0070f3",
  textDecoration: "none",
};

const linkHoverStyle = {
  textDecoration: "underline",
};
const NotFoundPage = () => {
  return (
    <>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Image src={NotFImg} height={300} width={300} alt="Not Found" />
        <br />
        <h2 style={headingStyle}>Page Not Found</h2>
        <p style={paragraphStyle}>
          The page you are looking for does not exist.
        </p>
        <Link style={linkStyle} href="/">
          Go back to the homepage
        </Link>
      </div>
    </>
  );
};

export default NotFoundPage;
