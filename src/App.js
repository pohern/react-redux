import React, { useState, useEffect } from "react";
import axios from "axios";
import Post from "./components/Post/Post";

function App() {
  // 1. Hardcode UI
  // 2. Hardcode data, and set UI to use data
  // 3. Dynamically get my data.
  const [posts, setPosts] = useState([]);
  const [myPosts, setMyPosts] = useState([])

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => {
        setPosts(res.data) 
        const filteredPosts = res.data.filter(post => post.userId === 1) 
        setMyPosts(filteredPosts)
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <h1>All Posts</h1>
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
        <h1>My Posts</h1>
        <div className='col-6'>
          {myPosts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
