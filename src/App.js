import React, { useState } from "react";
import Post from './components/Post/Post'
function App() {
  // 1. Hardcode UI
  // 2. Hardcode data, and set UI to use data
  // 3. Dynamically get my data.
  const [posts, setPosts] = useState([
    {
      userId: 1,
      id: 1,
      title:
        "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
      body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
    },
    {
      userId: 1,
      id: 2,
      title: "qui est esse",
      body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla",
    },
  ]);
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          {posts.map((post) => (
            <Post {...post} key={post.id} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
