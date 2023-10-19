"use client";

import React from 'react';
import { Card, Avatar, Typography, Image, Divider, Row, Col } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const { Meta } = Card;
const { Title, Paragraph,Text } = Typography;

const BlogDetailsPage = ({params:{id}}:{params:{id:string}}) => {
    console.log(id);
  const blog = {
    title: 'Sample Blog Title',
    content: '  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sunt molestiae provident dolorem totam repellat quidem nesciunt sequi amet adipisci. Ut velit in nobis, ipsa fugit perspiciatis dolore quod! In fugiat aliquid earum, dicta optio tempora, nihil quo corporis iusto nesciunt quas nobis soluta asperiores. Eligendi nam sapiente nobis officiis totam, explicabo cum reprehenderit amet ea, vitae optio repudiandae maxime perspiciatis quibusdam. Nisi quae vero veritatis reiciendis debitis repellat eos excepturi nobis veniam enim repudiandae reprehenderit quos nostrum possimus doloremque accusantium tempore at harum, voluptatem odio. Optio obcaecati officiis non assumenda dolor maiores veniam magnam natus esse! Minus dignissimos iure asperiores!',
    author: 'John Doe',
    img: 'https://149658287.v2.pressablecdn.com/wp-content/uploads/2021/06/Emily_Henderson_1-1140x836.jpg',
    publishedTime: '2023-09-30T12:30:00Z', // Replace with your actual date and time
  };

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
        cover={<img alt={blog.title} src={blog.img} />}
      >
        <Meta
          avatar={<Avatar icon={<UserOutlined />} />}
          title={blog.author}
          description={`Published on ${blog.publishedTime}`}
        />
        <Divider />
        <Title level={3} style={{ marginBottom: 24 }}>{blog.title}</Title>
        <Paragraph>{blog.content}</Paragraph>
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
