import React, { useEffect, useState } from "react";
import Online from "../online/Online";
import "./Rightbar.css";

const Rightbar = ({ profile }) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const HomeRightBar = () => {
    return (
      <>
        <div className="birthdayContainer">
          <img className="birthdayImg" src="/assets/gift.jpg" alt="" />
          <span className="birthdayText">
            <b>Doha </b>and<b>4 other friends</b> have a birthday today
          </span>
        </div>
        <img className="rightbarAdd" src="/assets/ad.jpg" alt="" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
          {users.map((user) => (
            <Online key={user.id} user={user}></Online>
          ))}
        </ul>
      </>
    );
  };

  const ProfileRightBar = () => {
    return (
      <>
        <div>
          <h4 className="rightbarTitle">User Information</h4>
          <div className="rightbarInfo">
            <div className="rightbarInfoItem">
              <span className="rightbarinfoKey">City:</span>
              <span className="rightbarinfoKeyValue">New York</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarinfoKey">From:</span>
              <span className="rightbarinfoKeyValue">Madrid</span>
            </div>
            <div className="rightbarInfoItem">
              <span className="rightbarinfoKey">Relationship:</span>
              <span className="rightbarinfoKeyValue">Single</span>
            </div>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/person4.jpg"
              alt=""
            />
            <span className="rightbarFollowingName">Darudul Islam</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/person4.jpg"
              alt=""
            />
            <span className="rightbarFollowingName">Ariba Islam</span>
          </div>
          <div className="rightbarFollowing">
            <img
              className="rightbarFollowingImg"
              src="/assets/person/person4.jpg"
              alt=""
            />
            <span className="rightbarFollowingName">Afsana Islam</span>
          </div>
        </div>
      </>
    );
  };

  return (
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? (
          <ProfileRightBar></ProfileRightBar>
        ) : (
          <HomeRightBar></HomeRightBar>
        )}
      </div>
    </div>
  );
};

export default Rightbar;
