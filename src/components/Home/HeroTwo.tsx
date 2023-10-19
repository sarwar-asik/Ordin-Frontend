"use client"
import { Row, Col, Typography } from 'antd';
import Image from 'next/image';
import heroImg from "@/assets/hero2.jpg"
import Link from 'next/link';

const { Title, Paragraph } = Typography;

const HeroTwo = () => {
  const containerStyle = {
    padding: '2.4rem',
  };

  const titleStyle = {
    fontSize: '2.2rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
  };

  const paragraphStyle = {
    fontSize: '1rem',
    lineHeight: '1.5',
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
  };

  return (
    <div style={containerStyle}>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Image
            src={heroImg}
            alt="Interior Design"
            height={400}
            width={200}
            style={{ width: '100%' }}
          />
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <div>
            <Title level={1} style={titleStyle}>
              Modern Interior
            </Title>
            <Paragraph style={paragraphStyle}>
              We are a leading interior design company, providing top-notch
              services to transform your space into a work of art. Our
              experienced team of designers ensures that every project is a
              masterpiece.
            </Paragraph>
            <Paragraph style={paragraphStyle}>
              Whether its your home, office, or any commercial space, our
              interior design solutions are tailored to meet your needs. We
              believe that good design enhances the quality of life and work.
            </Paragraph>

          </div>
          <Link href="/services" style={buttonStyle}>
          Explore Services
        </Link>
        </Col>
      </Row>
    </div>
  );
};

export default HeroTwo;
