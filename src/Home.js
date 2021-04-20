const Home = () => {
    const title="Welcome to home";
    
    const randomGenerator=()=>{
        const randomm=Math.ceil(Math.random()*10);
        const home=document.querySelector(".home");
        const p=document.createElement("p");
        p.innerText=randomm;
        home.appendChild(p);
    }
    const passingArgument=(name)=>{
        const home=document.querySelector(".home");
        const p=document.createElement("p");
        p.innerText=name;
        home.appendChild(p);
    }
    return (  
        <div className="home">
            <h1>{title}</h1>
            <button onClick={randomGenerator}>Random</button>

            <button onClick={()=>passingArgument("Suman")}>Click</button>

        </div>
    );
}
 
export default Home;