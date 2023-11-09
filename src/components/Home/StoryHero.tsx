'use client'
import { ContainerOutlined, TableOutlined, ThunderboltOutlined } from '@ant-design/icons';
import { Row, Col, Typography, Space, Image as AntImage } from 'antd';
import { ReactElement } from 'react';
// import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';

const { Text, Title } = Typography;

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}

const Feature = ({ text, icon, iconBg }:FeatureProps) => {
  return (
    <Space align="center">
      <div
        style={{
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
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
    <Row gutter={16} justify="center">
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <div style={{ padding: '12px' }}>
          <Text
            style={{
              textTransform: 'uppercase',
              color: 'blue',
              fontWeight: 600,
              fontSize: 'sm',
              backgroundColor: '#e6f7ff',
              padding: '8px',
              borderRadius: '4px',
            }}
          >
            Our Story
          </Text>
          <Title level={2}>A digital Product design agency</Title>
          <Text style={{ color: 'gray' }}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
            eirmod tempor invidunt ut labore
          </Text>
          <Space direction="vertical" style={{ width: '100%' }} size="middle">
            <Feature
              icon={<TableOutlined style={{ color: 'yellow', fontSize: '20px' }} />}
              iconBg="#fffbe6"
              text="Business Planning"
            />
            <Feature
              icon={<ContainerOutlined style={{ color: 'green', fontSize: '20px' }} />}
              iconBg="#e6ffed"
              text="Financial Planning"
            />
            <Feature
              icon={<ThunderboltOutlined style={{ color: 'purple', fontSize: '20px' }} />}
              iconBg="#f9e6ff"
              text="Market Analysis"
            />
          </Space>
        </div>
      </Col>
      <Col xs={{ span: 24 }} md={{ span: 12 }}>
        <AntImage
          src="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="feature image"
          preview={false}
          style={{ width: '100%', borderRadius: '8px' }}
        />
      </Col>
    </Row>
  );
};

export default StoryHero;