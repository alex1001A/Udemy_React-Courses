import React, { useState, useEffect } from "react";
import Post from "./Post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((error) => console.log(error.message))
  }, []);

  console.log(posts);

  return (
    <div>
      <Post />
      
    </div>
  );
}

export default Posts;
