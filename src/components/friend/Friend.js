import React from "react";
import "./Friend.css";

const Friend = ({ user }) => {
  return (
    <li className="sidebarFriend">
      <img className="sidebarFriendImg" src={user.profilePicture} alt="" />
      <span className="sidebarFriendName">{user.userName}</span>
    </li>
  );
};

export default Friend;
