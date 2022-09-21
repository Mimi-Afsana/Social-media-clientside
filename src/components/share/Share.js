import React from "react";
import "./Share.css";
import PermMediaIcon from "@material-ui/icons/PermMedia";
import LabelIcon from "@material-ui/icons/Label";
import RoomIcon from "@material-ui/icons/Room";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";

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
          <input placeholder="What's in your mind?" className="shareInput" />
        </div>
        <hr className="shareHr" />
        <div className="shareBottom">
          <div className="shareOptions">
            <div className="shareOption">
              <PermMediaIcon
                htmlColor="tomato"
                className="shareIcon"
              ></PermMediaIcon>
              <span className="shareOptionText">Photo or Video</span>
            </div>
            <div className="shareOption">
              <LabelIcon htmlColor="blue" className="shareIcon"></LabelIcon>
              <span className="shareOptionText">Tag</span>
            </div>
            <div className="shareOption">
              <RoomIcon htmlColor="green" className="shareIcon"></RoomIcon>
              <span className="shareOptionText">Location</span>
            </div>
            <div className="shareOption">
              <InsertEmoticonIcon
                htmlColor="goldenrod"
                className="shareIcon"
              ></InsertEmoticonIcon>
              <span className="shareOptionText">Feeling</span>
            </div>
          </div>
          <button className="shareButton">Share</button>
        </div>
      </div>
    </div>
  );
};

export default Share;
