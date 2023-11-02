"use client";
import { Row, Col, Typography, Divider } from "antd";
import Image from "next/image";
import heroImg from "@/assets/chairBg.jpg";
import Link from "next/link";

const { Title, Paragraph } = Typography;

const HeroTwo = () => {
  const titleStyle = {
    fontSize: "2.2rem",
    fontWeight: "bold",
    marginBottom: "1rem",
  };

  const paragraphStyle = {
    fontSize: "1rem",
    lineHeight: "1.5",
  };

  const buttonStyle = {
    display: "inline-block",
    padding: "1rem 2rem",
    backgroundColor: "#4BB4B4",
    color: "white",
    textDecoration: "none",
    borderRadius: "5px",
    marginBlock: "1rem",
    fontSize: "1rem",
    transition: "background-color 0.3s",
    // alignmentBaseline:"auto"
  };

  return (
    <div className="bg-secondary  pr-2">
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Image
            src={heroImg}
            alt="Interior Design"
            unoptimized
            
            height={500}
            width={200}
            style={{ width: "100%" }}
          />
        </Col>
        <Col
          xs={24}
          sm={24}
          md={12}
          lg={12}
          xl={12}
          style={{
            // display: "flex",
            // justifyContent:"space-around",
            // flexDirection:"column",
         
          }}
        >
          <div>
            <Title level={1}>
              <Divider
                // dashed
                orientation="center"
                style={{
                  fontSize: "1.7rem",
                  fontWeight: "800",
                  marginBottom: "2rem",
                  marginTop:"3.5em"
                }}
              >
                Manage Interior
              </Divider>
            </Title>
            <Paragraph style={paragraphStyle}>
              You can manage your order in our site . We are a leading{" "}
              <strong>interior design</strong> company, providing top-notch
              services to transform your space into a work of art. Our
              experienced team of designers ensures
            </Paragraph>
            <Paragraph style={paragraphStyle}>
              Whether its your home, office, or any commercial space, our
              interior design solutions are tailored to meet your needs. We
              believe that good design enhances the quality of life and work.
            </Paragraph>
          </div>
          <Link
          className="bg-primary"
            href="/login"
            style={{
              display: "inline-block",
              padding: "1em",
              background: "#4BB4B4",
              color: "white",
              textDecoration: "none",
              borderRadius: "5px",
              marginBlock: "1rem",
              fontSize: "1rem",
              transition: "background 0.3s",
              width:"16%",
              marginTop: "6.2rem",
              // background: "red",
            }}
          >
            Lets get Start
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default HeroTwo;
