"use client";
import React, { useState } from "react";
import { Input, Button, message } from "antd";
import BreadCumbUI from "@/components/ui/BreadCumbUI";
import { getUserInfo } from "@/utils/local.storeage";
import { useChangePasswordMutation } from "@/redux/api/authApi";

const PasswordChangePage = () => {
  const userInfo = getUserInfo() as any;
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [changePassword] = useChangePasswordMutation();

  const handleOldPasswordChange = (e: any) => {
    setOldPassword(e.target.value);
  };

  const handleNewPasswordChange = (e: any) => {
    setNewPassword(e.target.value);
  };

  const handlePasswordChange = async () => {
    // Implement password change logic here
    if (!oldPassword || !newPassword) {
      return message.error("Please enter password");
    }
    const passwordData = {
      oldPassword,
      newPassword,
    };

    message.loading("changing password");
    try {
      //   console.log(passwordData);

      const res = (await changePassword({ ...passwordData })) as any;
      //   console.log(res);
      if (res?.data) {
        message.success("successFully changed");
      } else {
        message.error("Your old password is not correct");
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: page.tsx:36 ~ handlePasswordChange ~ error:",
        error
      );
    }
  };

  const containerStyle = {
    width: "300px",
    margin: "0 auto",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    boxShadow: "0 0 5px #ccc",
  };

  const inputContainerStyle = {
    marginBottom: "15px",
  };

  const labelStyle = {
    display: "block",
    marginBottom: "5px",
  };

  const buttonStyle = {
    backgroundColor: "#4BB4B4",
    border: "none",
    color: "#fff",
    padding: "6px 20px",
    borderRadius: "5px",
    cursor: "pointer",
  };

  return (
    <div>
      <BreadCumbUI
        items={[
          {
            label: `${userInfo?.email}`,
            link: "/profile",
          },
          {
            label: `Change Password`,
            link: `/user/change-password`,
          },
        ]}
      />
      <div
        style={{
          width: "50vw",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ccc",
          borderRadius: "5px",
          boxShadow: "0 0 5px #ccc",
          marginTop: "2rem",
        }}
      >
        <h1>Change Password</h1>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>Old Password:</label>
          <Input.Password
            type="password"
            value={oldPassword}
            onChange={handleOldPasswordChange}
          />
        </div>
        <div style={inputContainerStyle}>
          <label style={labelStyle}>New Password:</label>
          <Input.Password
            type="password"
            value={newPassword}
            onChange={handleNewPasswordChange}
          />
        </div>
        <Button style={buttonStyle} onClick={handlePasswordChange}>
          Change Password
        </Button>
      </div>
    </div>
  );
};

export default PasswordChangePage;
