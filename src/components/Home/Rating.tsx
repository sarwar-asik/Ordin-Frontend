"use client";
import { useReviewsQuery } from "@/redux/api/ReviewApi";
import { UserOutlined } from "@ant-design/icons";
import { Layout, Card, Rate, List, Space, Avatar, Tooltip } from "antd";
import LoadingData from "../ui/Loader/LoadingData";

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
  const { data, isLoading } = useReviewsQuery({ page: 1, limit: 6 });

  // console.log("🚀 ~ file: Rating.tsx:32 ~ ReviewsPage ~ data:", data);
  const reviewsData = data?.reviews;
  console.log(
    "🚀 ~ file: Rating.tsx:35 ~ ReviewsPage ~ reviewsDat:",
    reviewsData
  );

  return (
    <div className=" bg-secondary py- rounded-md px-1 ">
      <section className="mb-5">
        <h1 className=" text-[2.3rem] font-serif my-3">Customer Reviews</h1>
        <p className="mt-3 font-medium font-sans">
          After satisfaction service our customer reviewed about our interior
          about the interior service that he booked or choose.
        </p>
      </section>
      <Layout>
        {isLoading && <LoadingData />}
        <Content style={{ padding: "20px 0" }}>
          <List
            grid={{
              gutter: 12,
              xs: 1,
              sm: 1,
              md: 2,
              lg: 5,
            }}
            dataSource={reviewsData}
            renderItem={(item:any) => {
              let reviews =""
              if(item?.reviews?.length < 50){
                 reviews=`${item?.reviews}.I am satisfied with the interior `
              }
              else{
                reviews= item.reviews
              }
              return <List.Item>
                <Card
                  style={{
                    borderRadius: "10px",
                    padding: "0px",
                    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
                    borderTopRightRadius: "30%",

                    // margin: "8px",
                  }}
                >
                  <div className="block lg:flex  items-center justify-between gap-2">
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <Space wrap size={16}>
                        <Tooltip title={item?.user?.name}>
                          <Avatar
                            shape="square"
                            src={item?.user?.img}
                            size={64}
                            icon={item?.user?.name}
                          />
                        </Tooltip>
                      </Space>
                      {/* <span
                          style={{
                            marginLeft: "10px",
                          }}
                        >
                          
                        </span> */}
                    </div>
                    <div className="">
                      <Rate disabled defaultValue={item?.rating} />
                    </div>
                  </div>
                  <p style={{ color: "#94A3B8", marginTop: "10px" }}>
                    {reviews?.slice(0, 64)} 
                    {/* {item?.reviews?.length < 50 &&
                      ` I am satisfied with the interior `} */}
                  </p>
                </Card>
              </List.Item>;
            }}
          />
        </Content>
      </Layout>
    </div>
  );
};

export default ReviewsPage;
