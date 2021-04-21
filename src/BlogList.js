import { NavLink } from "react-router-dom";

const BlogList = ({blogs,title}) => {
    
    return ( 
        <div className="blog-list">
            <h1>{title}</h1>
                {
               blogs.map((blog)=>(
                   <NavLink to={`/blogs/${blog.id}`}>
                    <div className="blog-preview" key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.author}</p>
                        
                    </div>
                    </NavLink>
               ))
            }
        </div>
     );
}
 
export default BlogList;