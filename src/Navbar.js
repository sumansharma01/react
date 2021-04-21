import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 style={{
                color:"#F50057",
                fontWeight:"900"
            }}>The Suman blog</h1>
            <div className="links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/create">New Blog</NavLink>
            </div>
        </nav>
     );
}
 
export default Navbar;