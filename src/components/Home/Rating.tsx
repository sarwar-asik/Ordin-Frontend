"use client";
import { useReviewsQuery } from "@/redux/api/ReviewApi";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Card, Rate, List, Space, Avatar } from "antd";

const { Content } = Layout;

const reviewsDaa = [
  {
    id: 1,
    user: "User 1",
    rating: 4,
    review: "Great service! Very satisfied with the interior design work.",
  },
  {
    id: 2,
    user: "User 2",
    rating: 5,
    review: "Excellent interior service. Highly recommended!",
  },
  {
    id: 4,
    user: "User 2",
    rating: 4,
    review: "Excellent interior service. Highly recommended!",
  },
  // Add more review data here
];

const ReviewsPage = () => {
  const { data ,isLoading} = useReviewsQuery({ page: 1, limit: 6 });
  
  // console.log("🚀 ~ file: Rating.tsx:32 ~ ReviewsPage ~ data:", data);
  const reviewsData = data?.reviews;
  console.log("🚀 ~ file: Rating.tsx:35 ~ ReviewsPage ~ reviewsDat:", reviewsData)

  return (
    <div className="mt-[10rem] bg-secondary py-5 rounded-md px-1 ">
      <section className="">
        <h1 className=" text-[2.3rem] font-serif my-3">Customer Reviews</h1>
        <p className="mt-3 font-medium font-sans">
          After satisfaction service our customer reviewed about our interior
        </p>
      </section>
      <Layout>
        {isLoading&&
        <h2>Loading rating....</h2>}
        <Content style={{ padding: "20px" }}>
          <List
            grid={{ gutter: 16, column: 2 }}
            dataSource={reviewsData}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{
                    borderRadius: "10px", // Adjust the border radius as needed
                    padding: "16px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    margin: "8px",
                  }}
                >
                  <div className="block lg:flex  items-center justify-between gap-2">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Space wrap size={16}>
                        <Avatar
                          shape="square"
                          src={item?.user?.img}
                          size={64}
                          icon={<UserOutlined />}
                        />
                      </Space>
                      <span
                        style={{
                          marginLeft: "10px",
                        }}
                      >
                        {item?.user?.name}
                      </span>
                    </div>
                    <div className="">
                      <Rate disabled defaultValue={item?.rating} />
                    </div>
                  </div>
                  <p style={{ color: "#94A3B8", marginTop: "10px" }}>
                    {item?.reviews?.slice(0, 35)}
                  </p>
                </Card>
              </List.Item>
            )}
          />
        </Content>
      </Layout>
    </div>
  );
};

export default ReviewsPage;
