import React from "react";
import { PostType } from "./PostType";

const Post: React.FC<PostType> = ({ title, description }) => {
  return (
    <div className="bg-gray-200 rounded-lg p-3 hover:bg-gray-100 transition durarion-300">
      <div className="text-xl text-grey-900">{title}</div>
      <div className="text-md text-black">{description}</div>
    </div>
  );
};

export default Post;
