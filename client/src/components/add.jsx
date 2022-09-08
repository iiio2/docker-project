import { useState } from "react";
import axios from "axios";

const AddPost = ({ posts, setPosts }) => {
    const [title, setTitle] = useState(''); 


    const handleSubmit = async e => {
        e.preventDefault(); 
        const { data } = await axios.post(`http://localhost:3001/posts`, { title });
        console.log(data); 
        setPosts([...posts, { title, _id: data._id  } ]);     
        setTitle('');    
    }

    return ( <>
        <h3>Add Post</h3>
        <form onSubmit={handleSubmit} >
        <input 
            placeholder="add post" 
            name="title"  
            value={title}
            onChange={e=> setTitle(e.target.value) } 
        />
          <button>Add</button>
        </form>
    </> );
}
 
export default AddPost;