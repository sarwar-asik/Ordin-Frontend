"use client";
import {
  useCreateReviewMutation,
  useUserReviewByServiceQuery,
} from "@/redux/api/ReviewApi";
import { getUserInfo } from "@/utils/local.storeage";
import { CommentOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Rate, message } from "antd";
import React, { useState } from "react";

const desc = ["terrible", "bad", "normal", "good", "wonderful"];
const AddReviewsPage = ({ serviceId }: { serviceId: string }) => {
  // console.log(serviceId,"serviceId");

  const [createReviews] = useCreateReviewMutation();
  const { data } = useUserReviewByServiceQuery(serviceId);
  const alreadyReviewData = data;
  console.log(alreadyReviewData);

  const userInfo = getUserInfo() as any;
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);
  const [rateValue, setRateValue] = useState(3);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };
  const onReset = () => {
    form.resetFields();
  };

  const onFinish = async (values: any) => {
    // Handle form submission, e.g., send data to the server
    // console.log("Review:", values);

    const reviewData: any = {
      // after tuition
      userId: userInfo?.id,
      serviceId,
      rating: values?.rating,
      reviews: values?.reviews,
    };
    if (values.suggestions) {
      reviewData["suggestions"] = values.suggestions;
    }

    try {
      // console.log(reviewData);
      const response = await createReviews({ ...reviewData });
      //   console.log("🚀 ~ file: Reviews.tsx: ~ onFinish ~ response:", response)
      if (response) {
        onReset()
        setVisible(false);
        message.success("Thank You Message");
      }
    } catch (error) {
      console.log("🚀 ~ file: Reviews.tsx:50 ~ onFinish ~ error:", error);
    }
  };
  return (
    <div>
      <div>
        {userInfo?.id === alreadyReviewData?.user?.id ? (
          <>
            <br />
            <h2>Your Given a Review:</h2>
            <p>{alreadyReviewData?.reviews}</p>
            <p>{alreadyReviewData?.suggestions }</p>

            <h5>rating:{alreadyReviewData?.rating}</h5>
          </>
        ) : (
          <Button
            icon={<CommentOutlined />}
            type="dashed"
            onClick={showModal}
            block
          >
            Review and FeedBack
          </Button>
        )}
        <Modal
          title="Submit Review and Ratings"
          visible={visible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form name="reviewForm" form={form} onFinish={onFinish}>
            <Form.Item
              name="rating"
              label="Rating"
              initialValue={rateValue}
              rules={[{ required: true, message: "Please provide a rating" }]}
            >
              <Rate tooltips={desc} onChange={setRateValue} />
              {rateValue ? (
                <span className="ant-rate-text">{desc[rateValue - 1]}</span>
              ) : (
                ""
              )}
            </Form.Item>
            <Form.Item name="reviews" label="Reviews">
              <Input.TextArea placeholder="write your  review" />
            </Form.Item>
            <Form.Item name="suggestions" label="Give a Suggestions">
              <Input.TextArea placeholder="Place a suggestion to us." />
            </Form.Item>
            <Form.Item>
              
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </div>
  );
};

export default AddReviewsPage;
