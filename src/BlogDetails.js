import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetails = () => {
    const {id}=useParams();
    const {data:blog,isLoading,error}=useFetch(`http://localhost:8000/blogs/${id}`);
    return ( 
        <div className="blog-details">
            <h2>Blog detail-{id}</h2>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error}</div>}

            {blog && <div className="individual-blog">
                <h3>{blog.title}</h3>
                <p>{blog.author}</p>
                
            </div>}

            
        </div>
     );
}
 
export default BlogDetails;