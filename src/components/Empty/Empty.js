import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";

const Empty = () => {
  return (
    <div className="empty-container">
      <span className="icon">
        <AiOutlineUnorderedList />
      </span>
      <h4 className="empty-text">List is empty</h4>
    </div>
  );
};

export default Empty;
