"use client";
import { Typography, Row, Col, Card } from "antd";
import Image from "next/image";

const { Title, Paragraph } = Typography;

const About = () => {
  return (
    <div className="">
      <div className="bg-white font-[sans-serif] text-[#333] flex max-lg:flex-col px-2 my-8 gap-10">
        <div className="lg:max-w-md mx-auto">
          <h2 className="text-4xl font-extrabold mb-4">Discover Our Exclusive Service</h2>
          <p className="text-gray-500 text-sm">Ordain Interior qui  ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit. Eu eu quis anim aute.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-12 max-md:max-w-lg mx-auto">
          <div className="text-left bg-blue-50 rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-12 inline-block bg-white p-3 rounded-full" viewBox="0 0 32 32">
              <path d="M28.068 12h-.128a.934.934 0 0 1-.864-.6.924.924 0 0 1 .2-1.01l.091-.091a2.938 2.938 0 0 0 0-4.147l-1.511-1.51a2.935 2.935 0 0 0-4.146 0l-.091.091A.956.956 0 0 1 20 4.061v-.129A2.935 2.935 0 0 0 17.068 1h-2.136A2.935 2.935 0 0 0 12 3.932v.129a.956.956 0 0 1-1.614.668l-.086-.091a2.935 2.935 0 0 0-4.146 0l-1.516 1.51a2.938 2.938 0 0 0 0 4.147l.091.091a.935.935 0 0 1 .185 1.035.924.924 0 0 1-.854.579h-.128A2.935 2.935 0 0 0 1 14.932v2.136A2.935 2.935 0 0 0 3.932 20h.128a.934.934 0 0 1 .864.6.924.924 0 0 1-.2 1.01l-.091.091a2.938 2.938 0 0 0 0 4.147l1.51 1.509a2.934 2.934 0 0 0 4.147 0l.091-.091a.936.936 0 0 1 1.035-.185.922.922 0 0 1 .579.853v.129A2.935 2.935 0 0 0 14.932 31h2.136A2.935 2.935 0 0 0 20 28.068v-.129a.956.956 0 0 1 1.614-.668l.091.091a2.935 2.935 0 0 0 4.146 0l1.511-1.509a2.938 2.938 0 0 0 0-4.147l-.091-.091a.935.935 0 0 1-.185-1.035.924.924 0 0 1 .854-.58h.128A2.935 2.935 0 0 0 31 17.068v-2.136A2.935 2.935 0 0 0 28.068 12ZM29 17.068a.933.933 0 0 1-.932.932h-.128a2.956 2.956 0 0 0-2.083 5.028l.09.091a.934.934 0 0 1 0 1.319l-1.511 1.509a.932.932 0 0 1-1.318 0l-.09-.091A2.957 2.957 0 0 0 18 27.939v.129a.933.933 0 0 1-.932.932h-2.136a.933.933 0 0 1-.932-.932v-.129a2.951 2.951 0 0 0-5.028-2.082l-.091.091a.934.934 0 0 1-1.318 0l-1.51-1.509a.934.934 0 0 1 0-1.319l.091-.091A2.956 2.956 0 0 0 4.06 18h-.128A.933.933 0 0 1 3 17.068v-2.136A.933.933 0 0 1 3.932 14h.128a2.956 2.956 0 0 0 2.083-5.028l-.09-.091a.933.933 0 0 1 0-1.318l1.51-1.511a.932.932 0 0 1 1.318 0l.09.091A2.957 2.957 0 0 0 14 4.061v-.129A.933.933 0 0 1 14.932 3h2.136a.933.933 0 0 1 .932.932v.129a2.956 2.956 0 0 0 5.028 2.082l.091-.091a.932.932 0 0 1 1.318 0l1.51 1.511a.933.933 0 0 1 0 1.318l-.091.091A2.956 2.956 0 0 0 27.94 14h.128a.933.933 0 0 1 .932.932Z" data-original="#000000" />
              <path d="M16 9a7 7 0 1 0 7 7 7.008 7.008 0 0 0-7-7Zm0 12a5 5 0 1 1 5-5 5.006 5.006 0 0 1-5 5Z" data-original="#000000" />
            </svg>
            <h3 className="text-xl font-semibold mt-6 mb-2">Home Setting</h3>
            <p className="text-gray-500 text-sm">Home Interior Setting ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
            <button type="button" className="border px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:bg-gray-50">
              Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="rotate-90 ml-1.5"><path fill="#333" d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z" data-original="#000000" paint-order="fill markers stroke"></path></svg>
            </button>
          </div>
          <div className="text-left bg-blue-50 rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-12 inline-block bg-white p-3 rounded-full" viewBox="0 0 682.667 682.667">
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000" />
                </clipPath>
              </defs>
              <g fill="none" className="stroke-black" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" stroke-width="40" clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                <path d="M256 492 60 410.623v-98.925C60 183.674 137.469 68.38 256 20c118.53 48.38 196 163.674 196 291.698v98.925z" data-original="#000000" />
                <path d="M178 271.894 233.894 216 334 316.105" data-original="#000000" />
              </g>
            </svg>
            <h3 className="text-xl font-semibold mt-6 mb-2">Strong Setup</h3>
            <p className="text-gray-500 text-sm">Strong Setup ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
            <button type="button" className="border px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:bg-gray-50">
              Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="rotate-90 ml-1.5"><path fill="#333" d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z" data-original="#000000" paint-order="fill markers stroke"></path></svg>
            </button>
          </div>
          <div className="text-left bg-blue-50 rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-12 inline-block bg-white p-3 rounded-full" viewBox="0 0 512.001 512.001">
              <path d="M271.029 0c-33.091 0-61 27.909-61 61s27.909 61 61 61 60-27.909 60-61-26.909-61-60-61zm66.592 122c-16.485 18.279-40.096 30-66.592 30-26.496 0-51.107-11.721-67.592-30-14.392 15.959-23.408 36.866-23.408 60v15c0 8.291 6.709 15 15 15h151c8.291 0 15-6.709 15-15v-15c0-23.134-9.016-44.041-23.408-60zM144.946 460.404 68.505 307.149c-7.381-14.799-25.345-20.834-40.162-13.493l-19.979 9.897c-7.439 3.689-10.466 12.73-6.753 20.156l90 180c3.701 7.423 12.704 10.377 20.083 6.738l19.722-9.771c14.875-7.368 20.938-25.417 13.53-40.272zM499.73 247.7c-12.301-9-29.401-7.2-39.6 3.9l-82 100.8c-5.7 6-16.5 9.6-22.2 9.6h-69.901c-8.401 0-15-6.599-15-15s6.599-15 15-15h60c16.5 0 30-13.5 30-30s-13.5-30-30-30h-78.6c-7.476 0-11.204-4.741-17.1-9.901-23.209-20.885-57.949-30.947-93.119-22.795-19.528 4.526-32.697 12.415-46.053 22.993l-.445-.361-21.696 19.094L174.28 452h171.749c28.2 0 55.201-13.5 72.001-36l87.999-126c9.9-13.201 7.2-32.399-6.299-42.3z" data-original="#000000" />
            </svg>
            <h3 className="text-xl font-semibold mt-6 mb-2">Quick Support</h3>
            <p className="text-gray-500 text-sm">We try to support our customer for servicing interior design with our employee . Nostrud anim nulla officia e</p>
            <button type="button" className="border px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:bg-gray-50">
              Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="rotate-90 ml-1.5"><path fill="#333" d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z" data-original="#000000" paint-order="fill markers stroke"></path></svg>
            </button>
          </div>
          <div className="text-left bg-blue-50 rounded-md p-6">
            <svg xmlns="http://www.w3.org/2000/svg" className="fill-black w-12 inline-block bg-white p-3 rounded-full" viewBox="0 0 24 24">
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path d="M17.03 8.97a.75.75 0 0 1 0 1.06l-4.2 4.2a.75.75 0 0 1-1.154-.114l-1.093-1.639L8.03 15.03a.75.75 0 0 1-1.06-1.06l3.2-3.2a.75.75 0 0 1 1.154.114l1.093 1.639L15.97 8.97a.75.75 0 0 1 1.06 0z" data-original="#000000" />
                <path d="M13.75 9.5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 .75.75v2a.75.75 0 0 1-1.5 0v-1.25H14.5a.75.75 0 0 1-.75-.75z" data-original="#000000" />
                <path d="M3.095 3.095C4.429 1.76 6.426 1.25 9 1.25h6c2.574 0 4.57.51 5.905 1.845C22.24 4.429 22.75 6.426 22.75 9v6c0 2.574-.51 4.57-1.845 5.905C19.571 22.24 17.574 22.75 15 22.75H9c-2.574 0-4.57-.51-5.905-1.845C1.76 19.571 1.25 17.574 1.25 15V9c0-2.574.51-4.57 1.845-5.905zm1.06 1.06C3.24 5.071 2.75 6.574 2.75 9v6c0 2.426.49 3.93 1.405 4.845.916.915 2.419 1.405 4.845 1.405h6c2.426 0 3.93-.49 4.845-1.405.915-.916 1.405-2.419 1.405-4.845V9c0-2.426-.49-3.93-1.405-4.845C18.929 3.24 17.426 2.75 15 2.75H9c-2.426 0-3.93.49-4.845 1.405z" data-original="#000000" />
              </g>
            </svg>
            <h3 className="text-xl font-semibold mt-6 mb-2">Performance</h3>
            <p className="text-gray-500 text-sm">Laboris qui Lorem ad tempor ut reprehenderit. Nostrud anim nulla officia ea sit deserunt. Eu eu quis anim aute Laboris qui Lorem ad tempor ut reprehenderit.</p>
            <button type="button" className="border px-4 py-2 rounded-md font-bold flex items-center text-sm mt-6 hover:bg-gray-50">
              Learn more <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" className="rotate-90 ml-1.5"><path fill="#333" d="M12.006 1a1 1 0 0 1 .838.463l7 11a1 1 0 0 1-.985 1.527l-3.364-.48a.434.434 0 0 0-.495.43V20c0 1.645-1.355 3-3 3s-3-1.355-3-3v-6.06a.434.434 0 0 0-.495-.43l-3.364.48a1 1 0 0 1-.985-1.527l7-11a1 1 0 0 1 .85-.463z" data-original="#000000" paint-order="fill markers stroke"></path></svg>
            </button>
          </div>
        </div>
      </div>
      <div className="l mx-auto text-[#333] font-[sans-serif] my-4">
        {/* <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-4">Our Exclusive Service</h2>
          <p className="text-sm">Unlock a world of possibilities with our exclusive features. Explore how our unique offerings can transform your journey and empower you to achieve more.</p>
        </div> */}
        <div className="mt-8">
          <div className="grid md:grid-cols-2 items-center gap-12">
            <div>
              <Image height={380} width={300} src="https://readymadeui.com/image-1.webp" className="w-full  object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt="about" />
            </div>
            <div>
              <h3 className="text-2xl font-extrabold mb-4">Customization Design</h3>
              <p className="text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id.</p>
              <button type="button"
                className="px-6 py-4 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-black bg-black hover:bg-transparent hover:text-black transition-all duration-300">
                Read More
              </button>
            </div>
            <div className="max-md:order-1">
              <h3 className="text-2xl font-extrabold mb-4">Modern Performance</h3>
              <p className="text-sm">Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id. Dolore et sint mollit in nisi tempor culpa consectetur. Qui elit labore in nisi dolore tempor anim laboris ipsum ad ad consequat id.</p>
              <button type="button"
                className="px-6 py-4 mt-8 rounded text-white text-sm tracking-wider font-medium outline-none border-2 border-black bg-black hover:bg-transparent hover:text-black transition-all duration-300">
                Read More
              </button>
            </div>
            <div>
              <Image height={380} width={300} src="https://readymadeui.com/contact.webp" className="w-full object-contain rounded-md shadow-[0_14px_40px_-11px_rgba(93,96,127,0.2)]" alt="banner-2" />
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default About;
