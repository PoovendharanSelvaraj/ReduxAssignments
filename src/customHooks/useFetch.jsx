import { useEffect, useState } from 'react'

const useFetch = (url) => {
    const [data,setData]=useState([])
    const [loading, setLoading]=useState(true);
    const [error, setError]=useState(false)
    const getData=()=>{
        fetch(url)
        .then(r=>r.json())
        .then(r=>{console.log(r.items);
             setData(r.items);
            setLoading(false);
            setError(false) }).catch(e=>{setLoading(false); setError(true)})
    }

  useEffect(() => {
    getData();
  
   
  }, [url])
  return {
    data,
    loading,
    error
  }
}

export default useFetch