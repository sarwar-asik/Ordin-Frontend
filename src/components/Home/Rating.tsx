"use client";
import { useReviewsQuery } from "@/redux/api/ReviewApi";
import { LeftOutlined } from "@ant-design/icons";
import {
  Layout,
  Card,
  Rate,
  List,
  Space,
  Avatar,
  Tooltip,
  Image,
  Row,
  Col,
} from "antd";
import LoadingData from "../ui/Loader/LoadingData";
import "./rating.css";

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
  // console.log(
  //   "🚀 ~ file: Rating.tsx:35 ~ ReviewsPage ~ reviewsDat:",
  //   reviewsData
  // );

  return (
    <div className=" bg-secondary py- rounded-md px-2 py-5">
      <section className="mb-7 text-center">
        <h1 className=" text-[2.3rem] font-serif my-3">Customer Reviews</h1>
        <p className="mt-3 font-medium font-sans">
          After satisfaction service our customer reviewed about our interior
          about the interior service <br /> that he booked or choosed. Here showed some reviews.
        </p>
      </section>

   

      <Layout>
        {isLoading && <LoadingData />}
        <Row gutter={[10, 10]}>
          {reviewsData?.map((item: any, i) => {
            const reviews =
              item.reviews?.length > 64
                ? item.reviews
                : `${item?.reviews} Arranged my house with  the best interior design .`;
            return (
              <Col sm={24} lg={8} key={i}>
                <section className=" w-[50% bg-white hover:shadow-xl ">
                  <div
                    className="relative   py bg-gra00"
                    // style={{ border: "1px solid #ddd", borderRadius: "8px" }}
                  >
                    <div
                      className="text-center  text-lg font-italic px-3 py-11"
                      style={{
                        border: "2px solid #ddd",
                        borderRadius: "8px",
                        // borderBottom:"px"
                      }}
                    >
                      {reviews?.slice(0, 64)}
                    </div>
                    <div
                      className="absolute bg-red-30 bottom- left-1/2 transform -translate-x-1/2"
                      style={{
                        width: 0,
                        height: 0,
                        borderLeft: "28px solid transparent",
                        borderRight: "28px solid transparent",
                        borderTop: "36px solid #ddd",
                        borderBottom: "0px ",
                      }}
                    ></div>
                  </div>
                  <section
                    style={{
                      // background:"red",
                      display: "flex",
                      textAlign: "center",
                      justifyContent: "center",
                      marginTop: "36px",
                      // position:"absolute",
                      // bottom: 0,
                    }}
                  >
                    <div className=" p-1 ">
                      <Tooltip title="sarwar">
                        <Avatar
                          shape="circle"
                          size={64}
                          src={item?.user?.img}
                        />
                      </Tooltip>
                      <h3 className="text-slate-700 mt-1">Sarwar Hossain</h3>
                      <Rate
                        style={{
                          fontSize: "16px",
                        }}
                        disabled
                        defaultValue={4}
                      />
                    </div>
                  </section>
                </section>
              </Col>
            );
          })}
        </Row>
      </Layout>
    </div>
  );
};

export default ReviewsPage;
