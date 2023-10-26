"use client";
import { useReviewsQuery } from "@/redux/api/ReviewApi";
import { LeftOutlined } from "@ant-design/icons";
import { Layout, Card, Rate, List, Space, Avatar, Tooltip, Image, Row, Col, } from "antd";
import LoadingData from "../ui/Loader/LoadingData";
import "./rating.css";
import LoaderRating from "../ui/Loader/LoaderRating";

const { Content } = Layout;

const ReviewsPage = () => {
  const { data, isLoading } = useReviewsQuery({ page: 1, limit: 6 });

  // console.log("🚀 ~ file: Rating.tsx:32 ~ ReviewsPage ~ data:", data);
  const reviewsData = data?.reviews;
  // console.log(reviewsData,"review data");
  // console.log(
  //   "🚀 ~ file: Rating.tsx:35 ~ ReviewsPage ~ reviewsDat:",
  //   reviewsData
  // );

  return (
    <div className=" bg-secondary py- rounded-md px-2 py-5">
      <section className="mb-7 text-center">
        <h1 className=" text-[2.3rem] font-serif my-4">What our customers are saying ?</h1>
        <p className="mt-3 font-medium font-sans">
          After satisfaction service our customer reviewed about our interior
          about the interior service <br /> that he booked or choosed. Here
          showed some reviews.
        </p>
      </section>

     

      <section className="mt-3">

        {
          isLoading && <LoaderRating/>
        }
        {/* <LoaderRating/> */}
       
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {reviewsData?.map((item: any) => {
           const reviews = item.reviews?.length > 64 ? item.reviews : `${item?.reviews} Arranged my house with the best interior design .`;
            return (
              <div
                key={item?.name}
                className="flex flex-col justify-between max-w-sm mx-4 my-6 shadow-lg bg-gray-100"
              >
                <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12">
                  <p className="relative px-6 py-1 text-lg italic text-center text-gray-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="w-8 h-8 text-primary"
                    >
                      <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                      <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                    </svg>
                    {reviews}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 512 512"
                      fill="currentColor"
                      className="absolute right-0 w-8 h-8 text-primary"
                    >
                      <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                      <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                    </svg>
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-primary text-white">
                  <Image
                    src={item?.user?.img}
                    alt=""
                    className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500"
                  />
                  <p className="text-xl font-semibold leadi">
                    {item?.user?.name}
                  </p>
                  <p className="text-sm uppercase">{item?.user?.email}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ReviewsPage;
