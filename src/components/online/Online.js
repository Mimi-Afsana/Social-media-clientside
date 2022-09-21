import React from "react";
import './Online.css'

const Online = ({ user }) => {
  return (
    <li className="rightbarFriend">
      <div className="rightbarProfileImgContsiner">
        <img className="rightbarProfileImg" src={user.profilePicture} alt="" />
        <span className="rightbarOnline"></span>
      </div>
      <span className="rightbarUserName">{user.userName}</span>
    </li>
  );
};

export default Online;
