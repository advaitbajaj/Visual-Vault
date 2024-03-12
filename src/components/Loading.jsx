import React from "react";
import ReactLoading from "react-loading";

const Loading = () => {
  return (
    <div className="flex justify-center mt-5">
      <ReactLoading type="spin" color="#CAF0F8" height={100} width={50} />
    </div>
  );
};

export default Loading;
