"use client"
import { Layout, Row, Col, Card, Button } from 'antd';
import Link from 'next/link';

const { Content } = Layout;

const blogs = [
  {
    id: 1,
    title: 'User Demandable',
    content: 'This is the content of Blog Post.is the content of Blog.is the content of Blog',
  },
  {
    id: 2,
    title: 'Best 5 ',
    content: 'This is the content of Blog Post.is the content of Blogis the content of Blog ',
  },
  {
    id: 2,
    title: '5 Interior idea',
    content: 'This is the content of Blog Post.is the content of Blogis the content of Blogis the content of Blog ',
  },
  // Add more blog data here
];

const BlogPage = () => {
  return (

    <div className="mt-[10rem] bg-secondary py-5 rounded-md px-1 ">
      <section className="">
        <h1 className=" text-[2.3rem] font-serif my-3">
          Our Blogs
        </h1>
        <p className="mt-3 font-medium font-sans">
         Some blogs about our service are present for you .Our Interior are very popular in the worldwide .
        </p>
      </section>
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Row gutter={16}>
          {blogs.map((blog) => (
            <Col key={blog.id} span={8}>
              <Card title={blog.title}>
                <p style={{
                    color:"#94A3B8"
                }}>
                {(blog.content).slice(0, 40)}

                </p>
                <Link href={`/blogs/${blog.id}`}>
                reed more....
                </Link>
              </Card>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
    </div>
  );
};

export default BlogPage;
