import React, { useEffect, useState } from "react";
import "./Post.css";
import MoreVertIcon from "@material-ui/icons/MoreVert";

const Post = ({ post }) => {
  // console.log(post);
  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const likeHandler = () => {
    setLike(isLiked ? like - 1 : like + 1);
    setIsLiked(!isLiked);
  };

  const [users, setUsers] = useState([]);
  useEffect(() => {
    fetch("user.json")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <div className="post">
      <div className="postWrapper">
        <div className="postTop">
          <div className="postTopLeft">
            <img
              className="postImg"
              src={
                users.filter((user) => user.id === post.userId)[0]
                  ?.profilePicture
              }
              alt=""
            />
            <span className="postUsername">
              {users.filter((user) => user.id === post.userId)[0]?.userName}
            </span>
            <span className="postDate">{post?.date}</span>
          </div>
          <div className="postTopRight">
            <MoreVertIcon></MoreVertIcon>
          </div>
        </div>
        <div className="postCenter">
          <span className="postText">{post?.desc}</span>
          <img className="postImgg" src={post?.photo} alt="" />
        </div>
        <div className="postBottom">
          <div className="postBottomLeft">
            <img
              onClick={likeHandler}
              className="likeIcon"
              src="/assets/like.png"
              alt=""
            />
            <img
              onClick={likeHandler}
              className="likeIcon"
              src="/assets/heart.jpg"
              alt=""
            />
            <span className="postLikeCounter">
              {like} people like this post
            </span>
          </div>
          <div className="postBottomRight">
            <span className="postCommentText">{post?.comment} comments</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
