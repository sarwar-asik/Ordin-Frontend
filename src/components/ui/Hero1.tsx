"use client";
import React from "react";
import { Row, Col, Typography, Button, Image } from "antd";
import heroImg from "@/assets/homeInteriorHero.jpg";

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
  color: "white",
};

const HeroOne = () => {
  return (
    // <div style={{ background: `url("${heroImg}") no-repeat center center fixed`, backgroundSize: 'cover', height: '500px', color: '#fff', textAlign: 'center', padding: '100px 0' }}>
    //   <div style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', padding: '20px', borderRadius: '10px' }}>
    //     <Title level={2} style={{ color: '#fff' }}>Transform Your Space</Title>
    //     <Paragraph style={{ color: '#fff', fontSize: '18px' }}>Discover our interior design services and create the home of your dreams.</Paragraph>
    //     <Row justify="center">
    //       <Col>
    //         <Button type="primary" size="large">Get Started</Button>
    //       </Col>
    //     </Row>
    //   </div>
    // </div>
    <div
      style={{
        background: `url("https://img.freepik.com/free-vector/comfortable-house-apartment-living-room-3d-realistic-vector-modern-interior-with-soft-sofa-glass-coffee-table-paintings-wall-white-carpet-laminate-floor-large-window-illustration_1441-3450.jpg?w=1060&t=st=1697709325~exp=1697709925~hmac=5af4b3153f84f608d501a460aebe5fc4b998e7bb8110fb5f66e35c636b4cd786")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "500px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#fff",
        textAlign: "center",
        marginTop:"5rem"
      }}
    >
      <div style={contentStyles}>
        <Row gutter={[18, 36]} align="middle">
          <Col lg={16} xs={24} md={12}>
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
                margin: "0 auto",
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
            <div  style={{
                  color: "white",
                  textAlign:"right",
                  padding:"0 10px"
                }}>
              <Title
                level={2}
                style={{
                  color: "white",
                  textAlign:"right"
                }}
              >
                Why Choose Us
              </Title>
              <div style={{ display: "flex",alignContent:"flex-end" }}>
                <li>Experienced Designers</li>
                <li>Customized Solutions</li>
                <li>Quality Materials</li>
                <li>On-Time Delivery</li>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default HeroOne;
