import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  const username = useParams().username
  
  useEffect(() => {
    fetch(`http://localhost:8800/api/users?username=${username}`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [username]);

  return (
    <>
      <Topbar></Topbar>
      <div className="profile">
        <Sidebar></Sidebar>
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={user?.coverPicture || "/assets/post/post-1.jpg"}
                alt=""
              />
              <img
                className="profileUserImg"
                src={user?.profilePicture || "/assets/person/person-3.jpg"}
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileDesc">{user?.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username={username}></Feed>
            <Rightbar user={user}></Rightbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
