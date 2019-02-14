import React from "react";
import Post from "./Post";
import "./PostList.css";
function PostList(props) {
  return (
    <div>
      {props.posts.map(post => {
        return <Post title={post.title} text={post.text} />;
      })}
    </div>
  );
}

export default PostList;
