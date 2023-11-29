import { Col, Row } from "antd";
import React from "react";
import ContentLoader from "react-content-loader";

const LoaderRating = () => {
  return (
    <div>
      <Row justify="center" align="middle" gutter={[24, 18]}>
        {[1, 2, 3].map((item) => {
          return (
            <Col xs={24} sm={24} md={12} lg={8} key={item}>
              <ContentLoader
                width={400}
                height={160}
                viewBox="0 0 400 160"
                backgroundColor="#f3f3f3"
                foregroundColor="#ecebeb"
             
              >
                <rect x="80" y="73" rx="3" ry="3" width="254" height="6" />
                <rect x="78" y="88" rx="3" ry="3" width="254" height="6" />
                <rect x="150" y="103" rx="3" ry="3" width="118" height="6" />
                <circle cx="210" cy="27" r="22" />
                <circle cx="181" cy="151" r="6" />
                <circle cx="211" cy="151" r="6" />
                <circle cx="241" cy="151" r="6" />
                <rect x="37" y="54" rx="32" ry="32" width="15" height="15" />
                <rect x="37" y="46" rx="0" ry="0" width="4" height="18" />
                <rect x="54" y="54" rx="32" ry="32" width="15" height="15" />
                <rect x="54" y="46" rx="0" ry="0" width="4" height="19" />
                <rect x="336" y="118" rx="32" ry="32" width="15" height="15" />
                <rect x="357" y="118" rx="32" ry="32" width="15" height="15" />
                <rect x="347" y="123" rx="0" ry="0" width="4" height="18" />
                <rect x="368" y="123" rx="0" ry="0" width="4" height="18" />
              </ContentLoader>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default LoaderRating;
