"use client";

import React from 'react';
import AccordionItem from '../ui/AccordionItem';
import { useFAQAllQuery } from '@/redux/api/FAQApi';
import LoadingData from '../ui/Loader/LoadingData';
import dynamic from 'next/dynamic';

const FAQPage = () => {
    const {data,isLoading} = useFAQAllQuery({page:1,limit:12})
    console.log("🚀 ~ file: FAQ.tsx:9 ~ FAQPage ~ data:", data)
    const FAQData = data?.FAQs;

    
    return (
        <section className="relative overflow-hidden bg-white pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color">
                You can Follow some dynamic common Question about our 
                Interior Design and our processing . 
              </p>
            </div>
          </div>
        </div>
        {isLoading&& <LoadingData/>}

        <div className="grid grid-cols-1 lg:grid-cols-2 ">
         {
            FAQData?.map((item:any,i)=>(
                <div key={i} className="">
                 <AccordionItem header={item?.question} text={item?.answer}/>
                </div>
            ))
         }
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
      </section>
    );
};

// export default FAQPage;



export default  dynamic(()=>Promise.resolve(FAQPage))


