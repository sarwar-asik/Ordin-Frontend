"use client";
import {
  DeleteOutlined,
  EditOutlined,
  EyeOutlined,
  PlusCircleFilled,
  ReloadOutlined,
} from "@ant-design/icons";
import { Button, Input, message } from "antd";
import Link from "next/link";
import { useState } from "react";
import ActionBarUI from "@/components/ui/ActionBarUI";
import dayjs from "dayjs";
import { useDebounced } from "@/redux/hooks";

import BreadCumbUI from "@/components/ui/BreadCumbUI";
import TableUI from "@/components/ui/TableUI";
import { useDeleteUserMutation, useUsersQuery } from "@/redux/api/userAPi";

const UsersList = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(5);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteUser] = useDeleteUserMutation();

  query["limit"] = size;
  query["page"] = page;
  query["sortBy"] = sortBy;
  query["sortOrder"] = sortOrder;
  query["searchTerm"] = searchTerm;

  const debouncedTerm = useDebounced({
    searchQuery: searchTerm,
    delay: 600,
  });

  if (!!debouncedTerm) {
    query["searchTerm"] = debouncedTerm;
  }
  const { data, isLoading } = useUsersQuery({ ...query });

  const usersData = data?.users 
  // || [{},{},{}];
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteUser(id);
      if (res) {
        message.success("user Deleted successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
    },
    { title: "Email", dataIndex: "email" },
    { title: "role", dataIndex: "role" },
    { title: "contact", dataIndex: "contact" },
    {
      title: "CreatedAt",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, YYYY hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div  hidden={data.role === "super_admin" ? true : false}>
            <Link
             
              href={`/admin/users/update/${data?.id}`}
            >
              <Button
                style={{
                  margin: "0px 5px",
                }}
                onClick={() => console.log(data)}
                type="primary"
              >
                <EditOutlined />
              </Button>
            </Link>
            <Button
              
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  const onPaginationChange = (page: number, pageSize: number) => {
    console.log("Page:", page, "PageSize:", pageSize);
    setPage(page);
    setSize(pageSize);
  };
  const onTableChange = (pagination: any, filter: any, sorter: any) => {
    const { order, field } = sorter;
    // console.log(order, field);
    setSortBy(field as string);
    setSortOrder(order === "ascend" ? "asc" : "desc");
  };

  const resetFilters = () => {
    setSortBy("");
    setSortOrder("");
    setSearchTerm("");
  };

  return (
    <div>
      <BreadCumbUI
        items={[
          {
            label: "admin",
            link: "/admin",
          },
          {
            label: "users",
            link: "/admin/users",
          },
        ]}
      />

      <ActionBarUI title="Users List">
        <Input
          type="text"
          size="large"
          placeholder="Search..."
          style={{
            width: "20%",
          }}
          onChange={(e) => {
            setSearchTerm(e.target.value);
          }}
        />
        <div>
        <Link href="/admin/users/create">
            <Button type="primary">
              Create  <PlusCircleFilled />
            </Button>
          </Link>
          {(!!sortBy || !!sortOrder || !!searchTerm) && (
            <Button
              onClick={resetFilters}
              type="primary"
              style={{ margin: "0px 5px" }}
            >
              <ReloadOutlined />
            </Button>
          )}
        </div>
      </ActionBarUI>

      <TableUI
        loading={isLoading}
        columns={columns}
        dataSource={usersData}
        pageSize={size}
        totalPages={meta?.total}
        showSizeChanger={true}
        onPaginationChange={onPaginationChange}
        onTableChange={onTableChange}
        showPagination={true}
      />
    </div>
  );
};

export default UsersList;
