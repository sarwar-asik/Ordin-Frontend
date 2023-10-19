"use client";
import { useBlogsQuery } from "@/redux/api/blogsApi";
import { Layout, Row, Col, Card, Button } from "antd";
import Link from "next/link";

const { Content } = Layout;



const BlogPage = () => {
  const { data:blogs, isLoading } = useBlogsQuery({ page: 1, limit: 10 });
  console.log("🚀 ~ file: Blogs.tsx:32 ~ BlogPage ~ data:", blogs)

  return (
    <div className="mt-[10rem] bg-secondary py-5 rounded-md px-1 ">
      <section className="">
        <h1 className=" text-[2.3rem] font-serif my-3">Our Blogs</h1>
        <p className="mt-3 font-medium font-sans">
          Some blogs about our service are present for you .Our Interior are
          very popular in the worldwide .
        </p>
      </section>
      {isLoading&&
      <>Loading....</>}
      <Layout>
        <Content style={{ padding: "20px" }}>
          <Row gutter={16}>
            {blogs?.blogs?.map((blog:any) => (
              <Col key={blog.id} span={8}>
                <Card title={blog.title}>
                  <p
                    style={{
                      color: "#94A3B8",
                    }}
                  >
                    {blog.content.slice(0, 40)}
                  </p>
                  <Link className="text-primary" href={`/blogs/${blog.id}`}>reed more....</Link>
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
