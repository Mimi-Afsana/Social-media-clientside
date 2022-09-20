import React from "react";
import Share from "../share/Share";
import "./Feed.css";

const Feed = () => {
  return (
    <div className="feed">
      <div className="feedWrapper">
       <Share></Share>
      </div>
    </div>
  );
};

export default Feed;
