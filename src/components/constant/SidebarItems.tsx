import type { MenuProps } from "antd";
import {
  ProfileOutlined,
  TableOutlined,
  ScheduleOutlined,
  ThunderboltOutlined,
  CreditCardOutlined,
  FileTextOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  ShopOutlined,
  MessageOutlined,
  DatabaseOutlined,
  ControlOutlined,
  UsergroupAddOutlined,
  ContainerOutlined,
  TabletOutlined,
  QuestionOutlined,
  PlusSquareOutlined,
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
      icon: <ShoppingCartOutlined/>,
      key: `/${role}cart`,
    },
    {
      label: <Link href={`/${role}/booking`}>Bookings</Link>,
      icon: <ShopOutlined/>,
      key: `/${role}/booking`,
    },
    {
      label: <Link href={`/${role}/reviews`}>Reviews</Link>,
      icon: <ThunderboltOutlined />,
      key: `/${role}/reviews`,
    },
    {
      label: <Link href={`/${role}/notification`}>Notification</Link>,
      icon: <MessageOutlined />,
      key: `/${role}/notification`,
    },
  ];

  const adminSidebarItems: MenuProps["items"] = [
    ...defaultSidebarItems,
    {
      label: <Link href={`/${role}/service`}>Services</Link>,
      icon:<DatabaseOutlined />,
      key: `/${role}/service`,
    },
    {
      label: <Link href={`/${role}/category`}>Category</Link>,
      icon: <ControlOutlined />,
      key: `/${role}/category`,
    },
    {
      label: <Link href={`/${role}/users`}>users</Link>,
      icon: <UsergroupAddOutlined />,
      key: `/${role}/users`,
    },
    {
      label: <Link href={`/${role}/bookings`}>booking</Link>,
      icon: <ShopOutlined/>,
      key: `/${role}/bookings`,
    },
    {
      label: "Content Manage",
      icon: <ContainerOutlined />,
      key: `contents`,
      children: [
        {
          label: <Link href={`/${role}/blogs`}>blogs</Link>,
          icon: <TabletOutlined/>,
          key: `/${role}/blogs`,
        },
        {
          label: <Link href={`/${role}/FAQ`}>FAQ</Link>,
          icon:<QuestionOutlined />,
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
          icon: <UsergroupAddOutlined/>,
          key: `/${role}/admin`,
        },
        {
          label: <Link href={`/super_admin/create_admin`}>Create Admin</Link>,
          icon: <PlusSquareOutlined />,
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
