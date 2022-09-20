import React from "react";
import "./Share.css";

const Share = () => {
  return (
    <div className="share">
      <div className="shareWrapper">
        <div className="shareTop">
          <img
            className="shareProfileImg"
            src="/assets/person/person-3.jpg"
            alt=""
          />
        </div>
        <div className="shareBottom"></div>
      </div>
    </div>
  );
};

export default Share;
