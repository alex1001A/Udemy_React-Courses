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

  return (
    <div>
      {
        posts.map((item) => {
            return <Post key={item.id} item={item}/>
        })
      }
      
    </div>
  );
}

export default Posts;
