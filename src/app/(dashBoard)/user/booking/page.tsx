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
import { useDeleteBookingMutation, useUserAllBookingsQuery } from "@/redux/api/bookingApi";


const BookingPage = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [deleteBooking] =useDeleteBookingMutation()

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
  //   console.log(query,"query..........");
  const { data, isLoading } = useUserAllBookingsQuery({ ...query });
//   console.log(data);

  const bookingData = data?.bookings?.map((item:any)=>{

    const service = item?.service
    return {
        ...service,
        ...item
    }
  })

//   console.log(bookingData);

//   const bookingData = data?.bookings;
  const meta = data?.meta;

  const deleteHandler = async (id: string) => {
    message.loading("Deleting.....");
    try {
    const res = await  deleteBooking(id);
    if(res){
        message.success("Booking Deleted successfully");
    }
     
    } catch (err: any) {
      //   console.error(err.message);
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "userId",
      dataIndex: "userId",
    },
    {
      title: "Service",
      dataIndex: "title",
    },
    { title: "Price", dataIndex: "price" },
    { title: "Address", dataIndex: "address" },
    { title: "status", dataIndex: "status" },
    { title: "Service Time", dataIndex: "serviceTime" },
    { title: "Service Date", dataIndex: "serviceDate" },
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
          <>
            <Button
              onClick={() => deleteHandler(data?.id)}
              type="primary"
              danger
            >
              <DeleteOutlined />
            </Button>
          </>
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
            label: "user",
            link: "/profile",
          },
          {
            label: "booking",
            link: "/user/booking",
          },
        ]}
      />

      <ActionBarUI title="Your Booked Service">
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
          <Link href="/admin/service/create">
            <Button type="primary">
              Create <PlusCircleFilled />
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
        dataSource={bookingData}
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

export default BookingPage;
