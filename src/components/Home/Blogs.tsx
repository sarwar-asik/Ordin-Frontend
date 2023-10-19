"use client"
import { Layout, Row, Col, Card, Button } from 'antd';
import Link from 'next/link';

const { Content } = Layout;

const blogs = [
  {
    id: 1,
    title: 'Blog Post 1',
    content: 'This is the content of Blog Post 1.',
  },
  {
    id: 2,
    title: 'Blog Post 2',
    content: 'This is the content of Blog Post 2.',
  },
  // Add more blog data here
];

const BlogPage = () => {
  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Row gutter={16}>
          {blogs.map((blog) => (
            <Col key={blog.id} span={8}>
              <Card title={blog.title}>
                {blog.content}
                <Link href={`/blogs/${blog.id}`}>
                  <Button type="primary">Read More</Button>
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default BlogPage;
