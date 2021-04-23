import {useState} from 'react';
const Create = () => {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    return ( 
        <div className="create-blog">
            <h1> Create a blog</h1>
            <label>Title</label>
            <input 
                type="text"
                value={title}
                onChange={(e)=>{setTitle(e.target.value)}}
            />
            <label>Author</label>
            <select
                onChange={(e)=>{setAuthor(e.target.value)}}
            >
                <option value="suman">Suman</option>
                <option value="pujan">Pujan</option>
                <option value="risu">Risu</option>
            </select>

            <div>
                <p>{title}</p>
                <p>{author}</p>
            </div>
        </div>

     );
}
 
export default Create;