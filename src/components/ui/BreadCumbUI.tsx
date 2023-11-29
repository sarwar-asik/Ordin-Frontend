import { Breadcrumb } from "antd";
import Link from "next/link";
import React from "react";

import {HomeOutlined} from "@ant-design/icons"

const BreadCumbUI = ({
  items,
}: {
  items: {
    label: string;
    link: string;
  }[];
}) => {
    const breadCrumbsItems =[
        {
            title:(<Link href='/'><HomeOutlined /></Link>)
        },
        ...items.map((item:any)=>{
            return {
                title:item.link?<Link href={item.link}>
                    {item.label}
                </Link>
                :
                <span>{item?.label}</span>
            }
        })
    ]

  return <Breadcrumb style={{marginInline:"1em",padding:"0.3em 0.7em"}} items={breadCrumbsItems} />
};

export default BreadCumbUI;
