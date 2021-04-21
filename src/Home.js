import {useState,useEffect} from 'react';
import BlogList from './BlogList';
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


    const [name, setName] = useState("suman");
    const useOfUseState=()=>{
        setName("pujan");
    }

    const useOfUseStateChangeAgain=()=>{
        setName("suman")
    }


    const [blogs,setBlogs]=useState(null);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const handleDelete=(id)=>{
        setBlogs(blogs.filter((blog)=>{return blog.id!==id}));
    }

    useEffect(()=>{
        fetch(" http://localhost:8000/blogs")
        .then(res=>{
            if(!res.ok){
                setLoading(false);
                setBlogs(null);
                throw Error('error in fetching blogs');
                
            }
            return res.json()})
        .then(ress=>{setBlogs(ress);
            setError(null);
            setLoading(false);
        })
        .catch((err)=>{setError(err.message)});
    },[])

    return (  
        <div className="home">
            {/* <h1>{title}</h1>
            <button onClick={randomGenerator}>Random</button>

            <button onClick={()=>passingArgument("Suman")}>Click</button>

            <button onClick={useOfUseState} onDoubleClick={useOfUseStateChangeAgain}>Testing useState</button>

            <p>{name}</p> */}

            {error && <div>{error}</div>}
            {isLoading && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All blogs"/>}
            

        </div>
    );
}
 
export default Home;