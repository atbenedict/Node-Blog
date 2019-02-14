import React from "react";

function Post(props) {
  return (
    <div className="PostCard">
      <div className="PostTitle">{props.title}</div>
      <div className="PostContent">{props.text}</div>
    </div>
  );
}

export default Post;
