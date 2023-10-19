import { Row, Col, Button, Divider } from "antd";
import Link from "next/link";
import Logo from "./Logo";
import {
  FacebookFilled,
  LinkedinOutlined,
  TwitterOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "#001529",
        color: "white",
        padding: "2rem 0",
        // position: "fixed",
        // bottom: 0,
        width: "100%",
        overflow: "auto",
        fontFamily:"serif"
      }}
    >
      <Row gutter={[16, 16]}>
        <Col xs={24} sm={12} md={8}>
          <p style={{ background: "white", width: "6rem",borderRadius:"5px" }}>
            <Logo />
          </p>
          <p>123 Company Street</p>
          <p>City, Country</p>

          <p>Phone: +1 234 567 890</p>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h2>Useful Links</h2>
          <br/>
          <div className="text-2xl flex gap-3 text-blue-400">
            <FacebookFilled />
            <LinkedinOutlined />
            <TwitterOutlined />
          </div>
        </Col>
        <Col xs={24} sm={12} md={8}>
          <h2>Follow Us</h2>
          <p>Stay connected on social media:</p>
          <div>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;
