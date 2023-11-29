"use client";

import { Table } from "antd";
import React from "react";

type ITableProps = {
  loading?: boolean;
  columns?: any;
  dataSource?: any;
  pageSize?: number;
  totalPages?: number;
  showSizeChanger?: boolean;
  onPaginationChange?: (page: number, pageSize: number) => void;
  onTableChange?: (pagination: any, filter: any, sorter: any) => void;
  showPagination?: boolean;
};

const TableUI = ({
  columns,
  dataSource,
  loading = false,
  pageSize,
  totalPages,
  showSizeChanger = true,
  onPaginationChange,
  onTableChange,
  showPagination = true,
}: ITableProps) => {
  //! for pagination


  ///! table data config /
  const paginationConfig = showPagination
    ? {
        pageSize:pageSize,
        total:totalPages,
        pageSizeOptions: [5, 10, 20],
        showSizeChanger: showSizeChanger,
        onChange: onPaginationChange,
      }
    : false;

  return (
    <Table
      loading={loading}
      columns={columns}
      style={{
        overflowX:"auto"
      }}
      
      dataSource={dataSource}
      pagination={paginationConfig}
      onChange={onTableChange}
    />
  );
};

export default TableUI;
