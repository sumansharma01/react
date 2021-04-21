// custom hook should start with use

import {useState,useEffect} from 'react';
const useFetch = (url) => {

    const [data,setData]=useState(null);
    const [isLoading,setLoading]=useState(true);
    const [error,setError]=useState(null);

    
        useEffect(()=>{
            fetch(url)
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
            .catch((err)=>{setError(err.message)});
        },[url])
     
        return {data,isLoading,error};


}
 
export default useFetch;