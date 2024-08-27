import React from "react";
import LeftMessage from "./LeftMessage";
import RightMessage from "./RightMessage";

const Message = () => {
  return (
    <>
      <div className="row">
        <LeftMessage />
        <RightMessage />
      </div>
    </>
  );
};

export default Message;
