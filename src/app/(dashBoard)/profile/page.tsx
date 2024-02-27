"use client";
import { getUserInfo } from "@/utils/local.storeage";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Layout, Row, Col, Card, Avatar, Typography, Button } from "antd";
import { useProfileUserQuery } from "@/redux/api/userAPi";
import { EditOutlined } from "@ant-design/icons";
import Link from "next/link";
import BreadCumbUI from "@/components/ui/BreadCumbUI";
import LoadingData from "@/components/ui/Loader/LoadingData";
import ProfileUserSection from "@/components/profile/ProfileUserSection";

const { Content } = Layout;
const { Title, Text } = Typography;

const Profile = () => {
  const router = useRouter();
  const user = getUserInfo() as any;
  // console.log(user);
  const { data, isLoading } = useProfileUserQuery(undefined);
  // console.log("🚀 ~ file: ~ data:", data);

  useEffect(() => {
    if (!user?.role) {
      router.push("/");
    }
  }, [user, router]);

  // const {role,email,img,contact} = data

  return (
    <>

      <BreadCumbUI
        items={[
          {
            label: `${data?.role}`,
            link: "/profile",
          },
          {
            label: `${data?.name}`,
            link: "/profile",
          },
        ]}
      />
      {
        isLoading && <LoadingData />
      }
      {/* <Layout style={{ minHeight: "100vh" }}>
      <Content style={{ padding: "24px" }}>
        <Row gutter={16}>
          <Col xs={24} sm={24} md={12} lg={8}>
            <Card>
              <Avatar src={data?.img} size={128} />
              <Title level={5}>{data?.role}</Title>
              <Title level={2}>{data?.name}</Title>
            </Card>
          </Col>
          <Col xs={24} sm={24} md={12} lg={16}>
            <Card>
              <Title level={3}>Profile Details</Title>
              <Text strong>Email: </Text>
              <Text> {data?.email}</Text>
              <br />
              <Text strong>Contact: </Text>
              <Text>{data?.contact}</Text>
            </Card>
            <Link href={"/profile/update"}>
              <Button type="dashed">
                {" "}
                <EditOutlined /> Update Profile{" "}
              </Button>
            </Link>
          </Col>
        </Row>
      </Content>
    </Layout> */}

      <ProfileUserSection profileData={data}/>
    </>
  );
};

export default Profile;
