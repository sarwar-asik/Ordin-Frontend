"use client";
import {
  ContainerOutlined,
  ShoppingCartOutlined,
  TableOutlined,
  ThunderboltOutlined,
} from "@ant-design/icons";
import { Row, Col, Typography, Space, Image as AntImage } from "antd";
import { ReactElement } from "react";
import heroImg from "@/assets/chairBg.jpg";
import Image from "next/image";
// import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';

const { Text, Title } = Typography;

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }: FeatureProps) => {
  return (
    <Space align="center">
      <div
        style={{
          width: "40px",
          height: "40px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: "50%",
          backgroundColor: iconBg,
        }}
      >
        {icon}
      </div>
      <Text strong>{text}</Text>
    </Space>
  );
};

const StoryHero: React.FC = () => {
  return (
    <Row gutter={16} justify="center" className="bg-secondary">
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <div style={{ padding: "16px" }}>
          <Text
            style={{
              textTransform: "uppercase",
              color: "blue",
              fontWeight: 600,
              fontSize: "sm",
              backgroundColor: "#e6f7ff",
              padding: "8px",
              borderRadius: "4px",
            }}
          >
            Our Story
          </Text>
          <Title level={2}>
            <span style={{ textTransform: "capitalize" }}>
              A digital Interior Provider
            </span>
          </Title>
          <Text style={{ color: "gray" }}>
            Whether its your home, office, or any commercial space, our interior
            design solutions are tailored to meet your needs. We believe that
            good design enhances the quality of life and work.
          </Text>
          <Space
            direction="vertical"
            style={{ width: "100%", margin: "16px 0" }}
            size="middle"
          >
            <Feature
              icon={
                <TableOutlined style={{ color: "blue", fontSize: "20px" }} />
              }
              iconBg="#fffbe6"
              text="Unique Design"
            />
            <Feature
              icon={
                <ShoppingCartOutlined
                  style={{ color: "green", fontSize: "20px" }}
                />
              }
              iconBg="#e6ffed"
              text="Early Delivery"
            />
            <Feature
              icon={
                <ThunderboltOutlined
                  style={{ color: "purple", fontSize: "20px" }}
                />
              }
              iconBg="#f9e6ff"
              text="Market Analysis"
            />
          </Space>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <Image
          src={heroImg}
          height={500}
          width={200}
          alt="feature image"
          //   preview={false}
          unoptimized
          style={{ width: "100%", borderRadius: "8px" }}
        />
      </Col>
    </Row>
  );
};

export default StoryHero;
