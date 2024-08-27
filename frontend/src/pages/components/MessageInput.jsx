import React from "react";
import SubmitButton from "./SubmitButton";

const MessageInput = () => {
  return (
    <>
      <div className="p-2 d-flex">
        <input
          type="text"
          name="search"
          className="form-control searchInput"
          placeholder="Search user"
        />
             <button type="submit" className="btn btn-primary mx-1">Submit</button>

      </div>
    </>
  );
};

export default MessageInput;
