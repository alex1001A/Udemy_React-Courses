import React, { useState, useEffect } from "react";
import Post from "./Post";
// import './Posts.css'

const API_URL = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((data) => setPosts(data))
      .catch((error) => setError(error.message))
      .finally(() => setIsLoading(false));
  }, []);

  // useEffect(() => {
  //   const fetchData = async () => {
  //   try {
  //     const res = await fetch(API_URL)
  //     const posts = await res.json()
  //     setPosts(posts)
  //   } catch (error) {
  //     setError(error.message)
  //   }
  //   setIsLoading(false)
  //   }
  //   fetchData()
  // });

  if (error) {
    return <h1>{error}</h1>;
  }

  return (
    <>
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        posts.map((item) => <Post key={item.id} item={item} />)
      )}
    </>
  );
}

export default Posts;
