import { useEffect, useState } from "react";
import AddPost from "./components/add";
import axios from "axios";
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true); 

  const getPosts = async () =>{
    const { data } =   await  axios.get(`http://localhost:3001/posts`);
    setPosts(data); 
    setLoading(false); 
    console.log(data); 
  }

  useEffect(()=>{
    getPosts(); 
  },[]); 

  if(loading) return <p>loading...</p>

  return (
    <div className="App">
      <AddPost posts={posts} setPosts={setPosts} />
      <ul>
      {posts.map(post=> <li key={post._id}>{post.title}</li> )}
      </ul>
    </div>
  );
}

export default App;
