import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,isLoading,error}=useFetch(`http://localhost:8000/blogs/${id}`);
    const history=useHistory();
    const handleDelete=()=>{
        fetch(`http://localhost:8000/blogs/${id}`,{
            method:'DELETE'
        }).then(()=>{
            history.push('/');
        })
    }
    return ( 
        <div className="blog-details">
            <h2>Blog detail-{id}</h2>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {blog && <div className="individual-blog">
                <h3>{blog.title}</h3>
                <p>{blog.author}</p>
                <button onClick={handleDelete}>Delete</button>
            </div>}

            
        </div>
     );
}
 
export default BlogDetails;