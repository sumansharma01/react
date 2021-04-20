const Navbar = () => {
    return ( 
        <nav className="navbar">
            <h1 style={{
                color:"#F50057",
                fontWeight:"900"
            }}>The Suman blog</h1>
            <div className="links">
                <a href="/">Home</a>
                <a href="/create">New Blog</a>
            </div>
        </nav>
     );
}
 
export default Navbar;