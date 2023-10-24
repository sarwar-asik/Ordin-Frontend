import { Row, Col, Button, Divider } from "antd";
import Link from "next/link";
import Logo from "./Logo";

import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
  FacebookFilled,
} from "@ant-design/icons";
import { Space, Tag } from "antd";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#001529",
        color: "white",
        padding: "8rem 1em",
        // position: "fixed",
        // bottom: 0,
        // width: "100%",
        overflow: "auto",
        fontFamily: "serif",
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <p
            style={{ background: "white", width: "6rem", borderRadius: "5px" }}
          >
            <Logo />
          </p>
          <br />
          <p>123 Stepen Road</p>
          <p>Miami,Florida,USA</p>
          <p>Phone: +1 234 567 890</p>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h1>Our Designs</h1>
          <br />
          <div className="text-base text-[1.3rem] flex flex-col  text-blue-200">
          <h6>Home Interior</h6>
          <h6>Office Interior</h6>
          <h6>Restaurant Interior</h6>
          <h6>Roof Interior</h6>
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h2>Follow Us</h2>
          <p>Stay connected on social media:</p>
          <div style={{margin:"10px 0"}}>
            <Space size={[0, 8]} wrap>
              <Tag icon={<TwitterOutlined />} color="#55acee">
                Twitter
              </Tag>
              <Tag icon={<YoutubeOutlined />} color="#cd201f">
                Youtube
              </Tag>
              <Tag icon={<FacebookOutlined />} color="#3b5999">
                Facebook
              </Tag>
              <Tag icon={<LinkedinOutlined />} color="#55acee">
                LinkedIn
              </Tag>
            </Space>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
