"use client";
import { CommentOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Rate } from "antd";
import React, { useState } from "react";

const AddReviewsPage = ({serviceId}:{serviceId:string}) => {
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setVisible(true);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const onFinish = (values: any) => {
    // Handle form submission, e.g., send data to the server
    console.log("Review:", values);
    setVisible(false);
  };
  return (
    <div>
   

      <div >
        <Button icon={<CommentOutlined />} type="dashed" onClick={showModal} block>
          Review and  FeedBack
        </Button>
        <Modal
          title="Submit Review and Ratings"
          visible={visible}
          onCancel={handleCancel}
          footer={null}
        >
          <Form name="reviewForm" onFinish={onFinish}>
            <Form.Item
              name="rating"
              label="Rating"
              rules={[{ required: true, message: "Please provide a rating" }]}
            >
              <Rate />
            </Form.Item>
            <Form.Item name="feedback" label="Feedback">
              <Input.TextArea />
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
