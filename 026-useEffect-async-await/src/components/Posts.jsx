import React, { useState, useEffect } from "react";
import Post from "./Post";
// import './Posts.css'

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoadind, setIsLoading] = useState(true);

  useEffect(() => {
    const fethcData = async () => {
      try {
        const res = await fetch(API_URL);
        const posts = await res.json();
        setPosts(posts);
      } catch (error) {
        setError(error.message);
      }
      setIsLoading(false);
    }
    fethcData()
  }, []);

  // useEffect(() => {
  //   fetch(API_URL)
  //     .then((response) => response.json())
  //     .then((data) => setPosts(data))
  //     .catch((error) => setError(error.message))
  //     .finally(() => setIsLoading(false));
  // }, []);

  if (error) {
    return <h1>Error: {error}</h1>;
  }

  return (
    <>
      <h1>Posts</h1>
      <hr />
      {isLoadind ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((item) => {
          return <Post key={item.id} item={item} />;
        })
      )}
    </>
  );
}

export default Posts;
