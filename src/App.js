import React, { useState} from 'react';
function App() {
  // 1. Hardcode UI
  // 2. Hardcode data, and set UI to use data
  // 3. Dynamically get my data.
  const [post, setPost] = useState({
    userId: 1,
    id: 1,
    title:
      "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto",
  });
  return (
    <div className='container'>
      <div className='row'>
        <div className='col-6'>
          <h2>{post.title}</h2>
          <p>
            <strong>User ID</strong> {post.userId}
          </p>
          <p>
            <strong>Post ID</strong> {post.id}
          </p>
          <p>
            {post.body}
          </p>
        </div>
      </div>
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
