import React, { useEffect, useState } from "react";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import "./Profile.css";

const Profile = () => {
  const [user, setUser] = useState({});
  useEffect(() => {
    fetch(`http://localhost:8800/api/users?username=dohaa`)
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, []);

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
                src="/assets/post/post-1.jpg"
                alt=""
              />
              <img
                className="profileUserImg"
                src="/assets/person/person-2.jpg"
                alt=""
              />
            </div>
            <div className="profileInfo">
              <h4 className="profileInfoName">{user?.username}</h4>
              <span className="profileDesc">{user?.desc}</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed username="dohaa"></Feed>
            <Rightbar profile></Rightbar>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
