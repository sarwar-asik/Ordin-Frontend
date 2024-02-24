"use client";
import { useBlogsQuery } from "@/redux/api/blogsApi";
import { Layout, Row, Col, Card, Button } from "antd";
import Link from "next/link";
import LoadingData from "../ui/Loader/LoadingData";
import LoaderBlogs from "../ui/Loader/LoaderBlogs";

const { Content } = Layout;

const BlogPage = () => {
  const { data: blogs, isLoading } = useBlogsQuery({ page: 1, limit: 10 });
  // console.log("🚀 ~ file: Blogs.tsx:32 ~ BlogPage ~ data:", blogs);

  return (
    <div className=" bg-secondary py-5  px-2 ">
      <section className="text-center mb-4">
        <h1 className=" text-[2.3rem] font-serif uppercase text-[#4d4c4c]">Our Blogs</h1>
        <p className="mt-3 font-medium font-sans text-[#5f5d5d]">
          Some blogs about our service are present for you .Our Interior are
          very popular in the worldwide .
        </p>
      </section>
      {isLoading && <LoaderBlogs />}
      {/* <LoaderBlogs/> */}
      <Layout>
        <Content style={{ padding: "18px" }}>
          <Row gutter={16}>
            {blogs?.blogs?.map((blog: any) => {
              return (
                <Col key={blog.id} sm={12} lg={8}>
                  <Card
                    title={blog.title}
                    extra={<span>Author: {blog?.author}</span>}
                    style={{
                      padding: "3rem 0"
                    }}
                  >
                    <p
                      style={{
                        color: "#94A3B8",


                      }}
                    >
                      <Card.Meta
                        title={blog?.publishedTime}
                        description={<span style={{
                          fontSize: "16px"
                        }}>{blog.content.slice(0, 220)}</span>}
                        style={{
                          marginTop: "1rem 0"
                        }}
                      />
                    </p>
                    <Link className="text-primary" href={`/blogs/${blog.id}`}>
                      reed more....
                    </Link>
                  </Card>
                </Col>
              );
            })}
          </Row>
        </Content>
      </Layout>
    </div>
  );
};

export default BlogPage;
