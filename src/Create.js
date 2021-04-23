import {useState} from 'react';
import { useHistory } from 'react-router-dom';
const Create = () => {
    const [title,setTitle]=useState('');
    const [author,setAuthor]=useState('');
    const history=useHistory();

    const handleSubmit=(e)=>{
        e.preventDefault();
        const data={title,author};

        fetch("http://localhost:8000/blogs",{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body:JSON.stringify(data)
        }).then(()=>{
            console.log("new blog added");
            history.push("/");

        })
        
    }       

    return ( 
        <div className="create-blog">
            <h1> Create a blog</h1>
            <form>
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
            <button type="submit" onClick={handleSubmit}>Submit</button>
            </form>
           
        </div>

     );
}
 
export default Create;