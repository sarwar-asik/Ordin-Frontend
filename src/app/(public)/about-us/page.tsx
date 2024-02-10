"use client";
import { Typography, Row, Col, Card } from "antd";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div style={{ padding: "24px" }} className=" mx-auto min-h-screen mt-2 lg:mt-7">
      <Title
        style={{
          fontSize: "2.5rem",
          color: "black",
          fontFamily: 'Georgia, Cambria, "Times New Roman", Times, serif',
        }}
      >
        About Interior Design{" "}
      </Title>
      <Paragraph>
        Interior design is the art and science of enhancing the interior of a
        space to create a more aesthetically pleasing and functional
        environment.
      </Paragraph>
      <Row gutter={16}>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Design Principles">
            <p>Interior design involves principles such as:</p>
            <ul>
              <li>Balance</li>
              <li>Harmony</li>
              <li>Proportion</li>
              <li>Contrast</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Our Services">
            <p>We offer a wide range of interior design services:</p>
            <ul>
              <li>Residential design</li>
              <li>Commercial design</li>
              <li>Renovation projects</li>
              <li>Consultations</li>
            </ul>
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={8} xl={8}>
          <Card title="Our Team">
            <p>Our team of designers is highly skilled and experienced:</p>
            <ul>
              <li>Interior designers</li>
              <li>Architects</li>
              <li>Project managers</li>
              <li>Decorators</li>
            </ul>
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default About;
