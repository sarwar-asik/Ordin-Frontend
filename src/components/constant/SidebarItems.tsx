import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import Link from "next/link";
import { USER_ROLE } from "@/constant/userRole";

export const sidebarItems = (role: string) => {

  // console.log(role,"role from sidebarItem");


  const publicSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/`}> Home</Link>,
      key: `/Home`,
    },
    {
      label: <Link href={`/service`}> Service</Link>,
      key: `/service`,
    },
    {
      label: <Link href={`/sign-up`}> sign Up</Link>,
      key: `/sign-up`,
    },
    {
      label: <Link href={`/login`}> Login</Link>,
      key: `/login`,
    },
  ];
  const defaultSidebarItems: MenuProps["items"] = [
    {
      label: <Link href={`/`}> Home</Link>,
      key: `/Home`,
      icon:<HomeOutlined/>
    },
    {
      label: "Profile",
      key: "profile",
      icon: <ProfileOutlined />,
      children: [
        {
          label: <Link href={`/profile`}> Profile</Link>,
          key: `/${role}/profile`,
        },
        {
          label: <Link href={`/${role}/change-password`}>Change Password</Link>,
          key: `/${role}/change-password`,
        },
      ],
    },
  ];

  const userSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/cart`}>Cart</Link>,
      icon: <TableOutlined />,
      key: `/${role}cart`,
    },
    {
      label: <Link href={`/${role}/booking`}>Bookings</Link>,
      icon: <ScheduleOutlined />,
      key: `/${role}/booking`,
    },
    {
      label: <Link href={`/${role}/reviews`}>Reviews</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/reviews`,
    },
    {
      label: <Link href={`/${role}/notification`}>Notification</Link>,
      icon: <CreditCardOutlined />,
      key: `/${role}/notification`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/service`}>Services</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/service`,
    },
    {
      label: <Link href={`/${role}/category`}>Category</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/category`,
    },
    {
      label: <Link href={`/${role}/users`}>users</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/users`,
    },
    {
      label: <Link href={`/${role}/bookings`}>booking</Link>,
      icon: <FileTextOutlined />,
      key: `/${role}/bookings`,
    },
    {
      label: "Content Manage",
      icon: <FileTextOutlined />,
      key: `contents`,
      children: [
        {
          label: <Link href={`/${role}/blogs`}>blogs</Link>,
          icon: <FileTextOutlined />,
          key: `/${role}/blogs`,
        },
        {
          label: <Link href={`/${role}/FAQ`}>FAQ</Link>,
          icon: <FileTextOutlined />,
          key: `/${role}/FAQ`,
        },
      ],
    },
  ];

  const superAdminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,

    {
      label: "Manage User",
      icon: <TableOutlined />,
      key: `/${role}/manage-user`,
      children: [
        {
          label: <Link href={`/super_admin/users`}>All Users</Link>,
          icon: <TableOutlined />,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/super_admin/create_admin`}>Create Admin</Link>,
          icon: <TableOutlined />,
          key: `/${role}/user`,
        },
      ],
    },
  ];

  if (role === USER_ROLE.user) return userSidebarItems;
  else if (role === USER_ROLE.admin) return adminSidebarItems;
  else if (role === USER_ROLE.superAdmin) return superAdminSidebarItems;
  else {
    return publicSidebarItems;
  }
};
