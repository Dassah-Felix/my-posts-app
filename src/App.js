import  axios  from 'axios';
import React, {useEffect, useState} from 'react'

function App() {
const[post, setposts]=useState([]);

useEffect(()=>{
(async ()=>{
let response = await axios({
  method: "Get",
  url:'https://jsonplaceholder.typicode.com/posts'
});
setposts(response.data);
})();
})


return (
<div className='app'>
<h1>Profile Maker</h1>
<div className='list'>
    {post.map((post)=>(
<div key={post.id} className="post">
<h3>{post.title}</h3>
<p>{post.body}</p>
</div>

    ))}
      
</div>
</div>
)
}

export default App
