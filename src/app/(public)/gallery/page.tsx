import React from "react";

const GalleryPage = () => {
  return (
    <div className="flex justify-center items-center text-black">
      <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
        <div role="main" className="flex flex-col items-center justify-center">
          <h1 className="text-4xl font-semibold leading-9 text-center">
            Our Gallery
          </h1>
          <p className="text-base leading-normal text-center text-slate-500 mt-4 lg:w-1/2 md:w-10/12 w-11/12">
            Our gallery with clean lines, simple decor, and a clutter-free
            environment for maximum productivity.
          </p>
        </div>
        <div className="lg:flex items-stretch md:mt-12 mt-8">
          <div className="lg:w-1/2">
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
              <div className="sm:w-1/2 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    10 April 2023
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Mediterranean Villa
                    </h2>
                    <p className="text-base leading-4 text-slate-200 mt-2">
                      A Mediterranean villa with a sun-drenched courtyard
                    </p>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/DYxtCJq/img-1.png"
                  className="w-full"
                  alt="chair"
                />
              </div>
              <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    12 July 2022
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Popular Sitting
                    </h2>
                    <p className="text-base leading-4 text-slate-200 mt-2">
                      We provide your most popular table
                    </p>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/3C5HvxC/img-2.png"
                  className="w-full"
                  alt="wall design"
                />
              </div>
            </div>
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  11 January 2023
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white">
                    Proper Lighting{" "}
                  </h2>
                  <p className="text-base leading-4 text-slate-200 mt-2">
                    Proper lighting is matched for customer
                  </p>
                </div>
              </div>
              <img
                src="https://i.ibb.co/Ms4qyXp/img-3.png"
                alt="sitting place"
                className="w-full mt-8 md:mt-6 hidden sm:block"
              />
              <img
                className="w-full mt-4 sm:hidden"
                src="https://i.ibb.co/6XYbN7f/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
          </div>
          <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
            <div className="relative">
              <div>
                <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                  20 April 2023
                </p>
                <div className="absolute bottom-0 left-0 md:p-10 p-6">
                  <h2 className="text-xl font-semibold 5 text-white"> </h2>
                  <p className="text-base leading-4 text-white mt-2">
                    Coastal Retreat
                  </p>
                </div>
              </div>
              <img
                src="https://i.ibb.co/6Wfjf2w/img-4.png"
                alt="sitting place"
                className="w-full sm:block hidden"
              />
              <img
                className="w-full sm:hidden"
                src="https://i.ibb.co/dpXStJk/Rectangle-29.png"
                alt="sitting place"
              />
            </div>
            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
              <div className="relative w-full">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    20 October 2023
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Eclectic Dining Room
                    </h2>
                    <p className="text-base leading-4 text-slate-200 mt-2">
                      Dive into minimalism Lorem ipsum dolor sit amet.
                    </p>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/3yvZBpm/img-5.png"
                  className="w-full"
                  alt="chair"
                />
              </div>
              <div className="relative w-full sm:mt-0 mt-4">
                <div>
                  <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">
                    22 April 2023
                  </p>
                  <div className="absolute bottom-0 left-0 p-6">
                    <h2 className="text-xl font-semibold 5 text-white">
                      Scandinavian Bedroom
                    </h2>
                    <p className="text-base leading-4 text-slate-200 mt-2">
                      A Scandinavian bedroom with minimalistic design
                    </p>
                  </div>
                </div>
                <img
                  src="https://i.ibb.co/gDdnJb5/img-6.png"
                  className="w-full"
                  alt="wall design"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryPage;
