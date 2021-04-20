import {useState} from 'react';
const Home = () => {
    // const title="Welcome to home";
    
    // const randomGenerator=()=>{
    //     const randomm=Math.ceil(Math.random()*10);
    //     const home=document.querySelector(".home");
    //     const p=document.createElement("p");
    //     p.innerText=randomm;
    //     home.appendChild(p);
    // }
    // const passingArgument=(name)=>{
    //     const home=document.querySelector(".home");
    //     const p=document.createElement("p");
    //     p.innerText=name;
    //     home.appendChild(p);
    // }
    // const [name, setName] = useState("suman");
    // const useOfUseState=()=>{
    //     setName("pujan");
    // }

    // const useOfUseStateChangeAgain=()=>{
    //     setName("suman")
    // }

    const [blogs,setBlogs]=useState([
        {title:"first blog", author:"Suman Sharma", id:1},
        {title:"Story of my life", author:"Pujan Chaulagain", id:2},
        {title:"Living in Thailand", author:"Risu", id:3},
        {title:"Life of a nepali student in Australia", author:"Riza", id:4},
        {title:"How to act smart even when you are dumb", author:"Tekraj", id:5}
    ])

    return (  
        <div className="home">
            {/* <h1>{title}</h1>
            <button onClick={randomGenerator}>Random</button>

            <button onClick={()=>passingArgument("Suman")}>Click</button>

            <button onClick={useOfUseState} onDoubleClick={useOfUseStateChangeAgain}>Testing useState</button>

            <p>{name}</p> */}
            {
               blogs.map((blog)=>(
                    <div className="blog-preview" key={blog.id}>
                        <h1>{blog.title}</h1>
                        <p>{blog.author}</p>
                    </div>
               ))
            }

        </div>
    );
}
 
export default Home;