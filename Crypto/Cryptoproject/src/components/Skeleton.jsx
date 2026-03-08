import React from "react";
const Skeleton = () => {
  return (
    <div className="animate-pulse flex flex-col md:flex-row gap-10 p-5 md:p-10 bg-gray-900 min-h-screen">
      {/* {/* Left Side Skeleton Side} */}
      <div className="w-full md:w-1/3 flex flex-col items-center border-r-2 border-gray-700 pr-5">
        <div className="rounded-full bg-gray-700 h-40 w-40 mb-5"></div>
        <div className="h-10 bg-gray-700 w-3/4 mb-4 rounded"></div>
        <div className="h-24 bg-gray-700 w-full mb-4 rounded"></div>
        <div className="h-8 bg-gray-700 w-1/2 rounded"></div>
      </div>

      {/* Right Side Skeleton*/}
      <div className="w-full md:w-2/3 flex flex-col gap-5">
        <div className="h-[400px] bg-gray-800 w-full rounded-xl"></div>
        <div className="flex gap-4">
          <div className="h-10 bg-gray-700 w-24 rounded"></div>
          <div className="h-10 bg-gray-700 w-24 rounded"></div>
          <div className="h-10 bg-gray-700 w-24 rounded"></div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton