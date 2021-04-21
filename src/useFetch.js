// custom hook should start with use

import {useState,useEffect} from 'react';
const useFetch = (url) => {

    const [data,setData]=useState(null);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const abortCont=new AbortController();
    
        useEffect(()=>{
            setTimeout(()=>{
                fetch(url,{signal:abortCont.signal})
            .then(res=>{
                if(!res.ok){
                    setLoading(false);
                    setData(null);
                    throw Error('error in fetching blogs');
                    
                }
                return res.json()})
            .then(ress=>{setData(ress);
                setError(null);
                setLoading(false);
            })
            .catch((err)=>{
                if(err.name==="AbortError"){
                    console.log("fetch aborted");
                }
                else{
                    setError(err.message)};
                }
                
            )},0);
            

            //cleanup function
            return ()=>{abortCont.abort()};
        },[url])
     
        return {data,isLoading,error};


}
 
export default useFetch;