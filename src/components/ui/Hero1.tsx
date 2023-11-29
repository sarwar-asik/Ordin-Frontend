"use client";
import React from "react";
import { Row, Col, Typography, Button } from "antd";
import heroImg from "@/assets/chairBg.jpg";
import Image from "next/image";

const { Title, Paragraph } = Typography;
const heroStyles = {
  background: 'url("your-hero-image.jpg")',
  backgroundSize: "cover",
  backgroundPosition: "center",
  height: "500px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  textAlign: "center",
};

const contentStyles = {
  padding: "36px 0",
  background: "rgba(0, 0, 0, 0.5)",
  // background:"#4BB4B4",
  color: "white",
};

const HeroOne = () => {
  return (
    <div
      style={{
        backgroundImage: `url("https://img.freepik.com/free-vector/comfortable-house-apartment-living-room-3d-realistic-vector-modern-interior-with-soft-sofa-glass-coffee-table-paintings-wall-white-carpet-laminate-floor-large-window-illustration_1441-3450.jpg?w=1060&t=st=1697709325~exp=1697709925~hmac=5af4b3153f84f608d501a460aebe5fc4b998e7bb8110fb5f66e35c636b4cd786")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "",
        // textAlign: "center",
        // marginTop: "5rem",
        padding:"4rem 0"
      }}
    >
      <div style={contentStyles}>
        <Row gutter={[18, 36]} align="middle">
          <Col lg={16} xs={24} md={12} style={{paddingInline:"1rem"}}>
            <Title
              level={1}
              style={{
                fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
                color: "white",
              }}
            >
              Modern Interior Design{" "}
            </Title>
            <Paragraph
              style={{
                fontSize: "1rem",
                color: "white",
                maxWidth: "600px",
                margin: "0",
                fontFamily:
                  'Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
              }}
            >
              Transform your living spaces with our expert interior design
              services. We create beautiful and functional interiors tailored to
              your preferences.
            </Paragraph>
          </Col>

          <Col lg={8} xs={24} md={12}>
            <div
              style={{
                color: "white",
                textAlign: "right",
                padding: "0 10px",
              }}
            >
              <Title
                level={2}
                style={{
                  color: "white",
                  textAlign: "right",
                  
                }}
              >
                Why Choose Us
              </Title>
              {/* <Image height={200} width={200} src={heroImg} alt="aa"/> */}
              <div style={{ display: "flex",flexDirection:"column", alignContent: "flex-end" }}>
                <li>Experienced Designers</li>
                <li>Customize Solution</li>
                <li>Quality Materials</li>
                <li>On-Time Reach</li>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroOne;
