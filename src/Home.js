const Home = () => {
    const title="Welcome to home";
    return (  
        <div className="home">
            <h1>{title}</h1>
            <p>{Math.ceil(Math.random()*10)}</p>
        </div>
    );
}
 
export default Home;