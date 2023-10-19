"use client";

import React from 'react';
import { Card, Avatar, Typography, Image, Divider, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import { useSingleBlogsQuery } from '@/redux/api/blogsApi';


const { Meta } = Card;
const { Title, Paragraph,Text } = Typography;

const BlogDetailsPage = ({params:{id}}:{params:{id:string}}) => {
const {data:blog,isLoading} = useSingleBlogsQuery(id)
console.log("🚀 ~ file: page.tsx:14 ~ BlogDetailsPage ~ blog:", blog)


  return (
    // <div style={{ padding: '24px',maxWidth:"60%",marginInline:"auto" }}>
    //   <Card
    //     style={{ width: '100%' }}
    //     cover={<Image alt={blog.title} src={blog.img} style={{height:"200px"}}/>}
    //   >
      
    //     <Meta
    //       avatar={<Avatar icon={<UserOutlined />} />}
    //       title={blog.author}
    //       description={new Date(blog.publishedTime).toDateString()} // Format the date as needed
    //     />
    //     <Title level={3}>{blog.title}</Title>
    //     <Paragraph>{blog.content}</Paragraph>
    //   </Card>
    // </div>
    <div style={{ padding: '24px' }}>
      <Card
        cover={<Image 
          // height={200} width={200}
           alt={blog?.title} src={blog?.img} />}
      >
        <Meta
          avatar={<Avatar icon={<UserOutlined />} />}
          title={blog?.author}
          description={`Published on ${blog?.publishedTime}`}
        />
        <Divider />
        <Title level={3} style={{ marginBottom: 24 }}>{blog?.title}</Title>
        <Paragraph>{blog?.content}</Paragraph>
        <Divider />
        <Row justify="space-between">
          <Col>
            <Text strong >Category:</Text> Interior Design
          </Col>
          <Col>
            <Text>Read Time:</Text> 5 minutes
          </Col>
        </Row>
      </Card>
    </div>

  );
};

export default BlogDetailsPage;
