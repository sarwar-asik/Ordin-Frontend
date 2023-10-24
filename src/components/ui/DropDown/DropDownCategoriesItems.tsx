import { SmileOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";

const CategoriesItems: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/"
          // target="_blank"
          // rel="noopener noreferrer"

        >
        Home Interior
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/"
          // target="_blank"
          // rel="noopener noreferrer"

        >
       Office Interior
        </Link>
      ),
    },
  
    {
      key: "3",
      label: (
        <Link href="/"
          // target="_blank"
          // rel="noopener noreferrer"
   
        >
          Resturant design
        </Link>
      ),
    //   disabled: true,
    },
    {
      key: "4",
      label: (
        <Link href="/"
          // target="_blank"
          // rel="noopener noreferrer"
   
        >
         Office Interior
        </Link>
      ),
    //   disabled: true,
    },
  
  ];


  export default CategoriesItems