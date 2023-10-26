import React from "react";
import { Col, Row } from "antd";

import ContentLoader from "react-content-loader";


const LoaderService = () => {
  return (
    <div className="my-3">
      <Row justify="center" align="middle" gutter={[24, 18]}>
        {[1, 2, 3, 4].map((item) => {
          return (
            <Col xs={24} sm={24} md={12} lg={6} key={item}>
              <ContentLoader
                speed={2}
                width={290}
                height={376}
                viewBox="0 0 310 376"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
              >
                <rect x="0" y="0" rx="0" ry="0" width="310" height="230" />
                <rect x="10" y="250" rx="0" ry="0" width="290" height="15" />
                <rect x="10" y="275" rx="0" ry="0" width="290" height="15" />
                <rect x="10" y="300" rx="0" ry="0" width="100" height="15" />
                <rect x="220" y="300" rx="0" ry="0" width="80" height="15" />
                <rect x="10" y="330" rx="0" ry="0" width="100" height="15" />
                <rect x="220" y="330" rx="0" ry="0" width="80" height="15" />
              </ContentLoader>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default LoaderService;
