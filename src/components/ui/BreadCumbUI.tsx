import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

import { HomeOutlined } from "@ant-design/icons"

const BreadCumbUI = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
  const breadCrumbsItems = [
    {
      title: (<Link href='/' ><HomeOutlined /> </Link>)
    },
    ...items.map((item: any) => {
      return {
        title: item.link ? <Link href={item.link} className="flex items-center gap-2">
          <svg xmlns="http://www.w3.org/2000/svg" className="fill-gray-300 w-6" viewBox="0 0 123.964 123.964">
            <path d="M121.7 57.681 83 26.881c-4-3.1-10-.3-10 4.8v10.3c0 3.3-2.2 6.2-5.5 6.2H6c-3.3 0-6 2.4-6 5.8v16.2c0 3.2 2.7 6 6 6h61.5c3.3 0 5.5 2.601 5.5 5.9v10.3c0 5 6 7.8 9.9 4.7l38.6-30c3.2-2.3 3.3-7 .2-9.4z" data-original="#000000" />
          </svg>
          <span>{item.label}</span>
        </Link>
          :
          <span>{item?.label}</span>
      }
    })
  ]

  return <Breadcrumb style={{ marginInline: "1em", padding: "0.3em 0.7em" }} items={breadCrumbsItems} />
};

export default BreadCumbUI;
