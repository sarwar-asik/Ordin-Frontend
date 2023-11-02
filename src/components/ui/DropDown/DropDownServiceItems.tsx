import { SmileOutlined } from "@ant-design/icons";
import { MenuProps } from "antd";
import Link from "next/link";

const serviceItems: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <Link
        href="/services"
        // target="_blank"
        rel="noopener noreferrer"
      >
        All Interior
      </Link>
    ),
  },
  {
    key: "2",
    label: (
      <Link
        href="/"
        // target="_blank"
        rel="noopener noreferrer"
      >
        Upcoming Design
      </Link>
    ),
  },

  {
    key: "3",
    label: (
      <Link
        href="/"
        // target="_blank"
        rel="noopener noreferrer"
      >
        Available Design
      </Link>
    ),
    //   disabled: true,
  },
];

export default serviceItems;
