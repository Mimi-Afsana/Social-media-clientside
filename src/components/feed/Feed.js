import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch("post.json")
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>

        {posts.map((post) => (
          <Post key={post.id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Feed;
