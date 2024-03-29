import Link from "next/link";

import {
  FacebookOutlined,
  LinkedinOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import { Space, Tag } from "antd";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="w-full px-4 divide-  bg-[#080808] text-white  no-underline">
      <div className="container mx-auto flex flex-col justify-between py-[8rem]  space-y-8 lg:flex-row lg:space-y-0">
        <div className="flex justify-center flex-col space-x-3 gap-3 lg:justify-start lg:w-1/3">
          {/* <Link href="/" className=" text-white no-underline">
            <span className=" text-3xl font-semibold w-[3rem]">Ordain</span>
          </Link> */}

          <Logo />
          <p>123 Stepen Road</p>
          <p>Miami,Florida,USA</p>
          <p>Phone: +1 234 567 890</p>
        </div>
        <div className="grid grid-cols-2 text-sm gap-x-3 gap-y-8 lg:w-2/3 px-3 lg:px-1 sm:grid-cols-4">
          <div className="space-y-3">
            <h3 className=" uppercase text-gray-100">Product</h3>
            <ul className="space-y-1 text-slate-300 text-xl">
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  Features
                </Link>
              </li>
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  Integrations
                </Link>
              </li>
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  Pricing
                </Link>
              </li>
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className=" uppercase text-gray-100">Company</h3>
            <ul className="space-y-1 text-xl">
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  Privacy
                </Link>
              </li>
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="uppercase text-gray-100">Developers</h3>
            <ul className="space-y-1 text-xl">
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  Public API
                </Link>
              </li>
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  Documentation
                </Link>
              </li>
              <li>
                <Link className="text-slate-200 no-underline" href="/">
                  Guides
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <div className="uppercase text-gray-100">Social media</div>
            <div className="flex justify-start space-x-3">
              <Space size={[0, 8]} wrap>
                <Tag icon={<TwitterOutlined />} color="#55acee">
                  Twitter
                </Tag>
                <Tag icon={<YoutubeOutlined />} color="#cd201f">
                  Youtube
                </Tag>
                <Tag icon={<FacebookOutlined />} color="#3b5999">
                  Facebook
                </Tag>
                <Tag icon={<LinkedinOutlined />} color="#55acee">
                  LinkedIn
                </Tag>
              </Space>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6 text-sm text-center dark:text-gray-400">
        © Ordain . All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
