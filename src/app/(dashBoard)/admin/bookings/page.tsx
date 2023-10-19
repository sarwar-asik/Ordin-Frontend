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
import {
  useCategoriesQuery,
  useDeleteCategoryMutation,
} from "@/redux/api/categoryApi";
import {
  useBookingsQuery,
  useDeleteBookingMutation,
  useUpdateBookingMutation,
} from "@/redux/api/bookingApi";

const AllBookingsPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteBooking] = useDeleteBookingMutation();

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
  const { data, isLoading } = useBookingsQuery({ ...query });
  const [updateBooking] = useUpdateBookingMutation()
  //   console.log("🚀 ~ file: page.tsx:50 ~ AllBookingsPage ~ data:", data)

  const usersData = data?.bookings;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
      const res = await deleteBooking(id);
      if (res) {
        message.success("Booking Delete successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const updateStatusHandler = async (id:string,type:string) => {
    message.loading("Updating....");
    try {
      const upData ={
        paymentStatus:type
      }
      console.log(upData,id);
      const res = await updateBooking({data:upData,id})
      console.log("🚀 ~ file: page.tsx:81 ~ updateStatusHandler ~ res:", res)
      if (res) {
        message.success("Booking updated successfully");
      }
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };
  const columns = [
    {
      title: "User Name",
      dataIndex: ["user", "name"],
    },
    { title: "Service Name", dataIndex: ["service", "title"] },
    { title: "Pending Status", dataIndex: ["paymentStatus"] },
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
          <div>
            <Button onClick={() => updateStatusHandler(data?.id,"success")} type="primary">
             success
            </Button>
             <Button onClick={() => updateStatusHandler(data?.id,"reject")} type="dashed" >
             reject
            </Button>
            <Button type="primary" onClick={() => deleteHandler(data?.id)} danger>
              Delete
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

      <ActionBarUI title="Booking List">
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

export default AllBookingsPage;
