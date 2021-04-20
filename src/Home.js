import {useState} from 'react';
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
    const [name, setName] = useState("suman");
    const useOfUseState=()=>{
        setName("pujan");
    }

    const useOfUseStateChangeAgain=()=>{
        setName("suman")
    }

    return (  
        <div className="home">
            <h1>{title}</h1>
            <button onClick={randomGenerator}>Random</button>

            <button onClick={()=>passingArgument("Suman")}>Click</button>

            <button onClick={useOfUseState} onDoubleClick={useOfUseStateChangeAgain}>Testing useState</button>

            <p>{name}</p>

        </div>
    );
}
 
export default Home;