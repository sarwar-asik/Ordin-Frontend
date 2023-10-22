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
          position: "relative",
          color:"white",
          fontFamily:"cursive"
          // width:"100%"
        }}
      >
        <section
          style={{
            position: "absolute",
            top: "5rem",
          }}
        >
          <h2 style={headingStyle}>Page Not Found</h2>
          <p style={paragraphStyle}>
            The page you are looking for does not exist.
          </p>
          <Link
            style={{
              color: "white",
              textDecoration: "none",
              fontWeight:"800",
              padding:"1em",
              background:"#4BB4B4",
              borderRadius:"10px",
              margin:"1rem 0"

            }}
            href="/"
          >
            Go back to the homepage
          </Link>
        </section>
        <Image
          src={NotFImg}
          height={300}
          width={300}
          style={{
            width: "100vw",
            height: "100%",
          }}
          alt="Not Found"
        />
      </div>
    </>
  );
};

export default NotFoundPage;
