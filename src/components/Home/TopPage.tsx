"use client";
import React from "react";
import { Button, Typography } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const TopPage = () => {
  const headerStyle = {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#4BB4B4",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "white",
  };

  const descriptionStyle = {
    textAlign: "center",
    padding: "2rem",
  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#333",
    maxWidth: "600px",
    margin: "0 auto",
  };

  const buttonContainerStyle = {
    textAlign: "center",
    marginTop: "2rem",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "1rem 2rem",
    backgroundColor: "#4BB4B4",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    margin: "0 1rem",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          padding: "1.5rem",
          color: "black",
          //   backgroundColor: "#4BB4B4",
        }}
      >
        <Title
          style={{
            fontSize: "2.5rem",
            color: "black",
            fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
          }}
        >
          Interior Design Services
        </Title>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
        }}
      >
        <Paragraph
          style={{
            fontSize: "1.2rem",
            color: "#333",
            maxWidth: "600px",
            margin: "0 auto",
            fontFamily:
              'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          }}
        >
          Welcome to our interior design service! We are dedicated to
          transforming your space into a beautiful and functional environment.
          Our team of experts is here to help you with all your interior design
          needs.
        </Paragraph>
      </div>
      <div
        style={{
          textAlign: "center",
          marginTop: "2rem",
        }}
      >
        <Link href="/login" style={buttonStyle}>
          Get Started
        </Link>
        <a href="/about" style={buttonStyle}>
          Learn More
        </a>
      </div>
    </div>
  );
};

export default TopPage;
