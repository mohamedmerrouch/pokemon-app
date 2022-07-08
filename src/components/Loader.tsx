import React from "react";

const Loader = () => {
  return (
    <div className="flex flex-col items-center justify-center ">
      <div className="w-16 h-16 border-b-8 border-gray-900 rounded-full animate-spin"></div>
      <div className="mt-3">Loading...</div>
    </div>
  );
};

export default Loader;
