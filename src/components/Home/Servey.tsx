"use client";
import React from "react";
import { Typography, Button, Card } from "antd";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const headerStyle = {
  textAlign: "center",
  padding: "2rem",
  backgroundColor: "#4BB4B4",
  color: "white",
};

const titleStyle = {
  fontSize: "2rem",
};

const contentStyle = {
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

const SurveyOverviewPage = () => {
  const surveyStyle = {
    textAlign: "center",
    padding: "2rem",
    backgroundColor: "#4BB4B4",
  };

  const titleStyle = {
    fontSize: "2rem",
    color: "black",
    fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
  };

  const cardStyle = {
    maxWidth: "800px",
    margin: "0 auto",
    marginTop: "2rem",
    padding: "1rem",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",

  };

  const paragraphStyle = {
    fontSize: "1.2rem",
    color: "#333",
    marginBottom: "1rem",
    fontFamily:
      'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
  };

  const buttonStyle = {
    backgroundColor: "#4BB4B4",
    color: "white",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    transition: "background-color 0.3s",
  };
  return (
    <div className="mt-[10rem] bg-secondary py-5 rounded-md px-1">
      <div
        style={{
          textAlign: "center",
          padding: "2rem",
          //  backgroundColor: '#4BB4B4',
        }}
      >
        <Title style={titleStyle}>Interior Design Survey & Overview</Title>
      </div>
      <Card style={cardStyle}>
        <Paragraph style={paragraphStyle}>
          We want to make your home beautiful and functional. Please take a
          moment to share your preferences and requirements with us. Your input
          will help us create a personalized interior design plan for your home.
        </Paragraph>
        <Link href="/login">
          <Button style={buttonStyle}>Take the Survey</Button>
        </Link>
      </Card>
    </div>
  );
};

export default SurveyOverviewPage;
