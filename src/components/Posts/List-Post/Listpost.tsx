import React, { useEffect, useState } from "react";
import axios from "axios";
import Post from "./Post";
import { PostType } from "./PostType";

const Listpost = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:8000/api/get-posts");
      setPosts(res.data);
      console.log(res.data);
    } catch (e) {}
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex flex-wrap">
        <div className="w-full md:w-1/2 p-4">
          <div>
            {posts
              .filter((_, index) => index % 2 === 0)
              .map((post) => {
                return (
                  <div className="mb-6">
                    <Post
                      key={post.id}
                      title={post.title}
                      description={post.description}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-full md:w-1/2 p-4">
          {posts
            .filter((_, index) => index % 2 === 1)
            .map((post) => {
              return (
                <div className="mb-6">
                  <Post
                    key={post.id}
                    title={post.title}
                    description={post.description}
                  />
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Listpost;
