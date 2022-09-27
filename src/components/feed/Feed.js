import axios from "axios";
import React, { useEffect, useState } from "react";
import Post from "../post/Post";
import Share from "../share/Share";
import "./Feed.css";

const Feed = ({ username }) => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const url =username?
      "http://localhost:8800/api/posts/profile/"+username:
      "http://localhost:8800/api/posts/timeline/633106cac33dd9c9d6c03b65"
      fetch(url)
      .then((res) => res.json())
      .then((data) => setPosts(data));
    // const fetchPosts = async () => {
    //   const res = await axios.get(
    //     "http://localhost:8800/api/posts/633106cac33dd9c9d6c03b65/timeline"
    //   );
    //   console.log(res.data);
    // };
    // fetchPosts();
  }, [username]);
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share></Share>

        {posts.map((post) => (
          <Post key={post._id} post={post}></Post>
        ))}
      </div>
    </div>
  );
};

export default Feed;
