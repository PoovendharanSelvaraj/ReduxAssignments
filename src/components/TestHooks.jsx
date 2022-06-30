import React from 'react'
import useFetch from '../customHooks/useFetch';
import useTimeout from '../customHooks/useTimeout'

const TestHooks = () => {
    const ready = useTimeout(5000);
    const url="http://api.github.com/search/users?q=Masai";
    const {data,loading,error}=useFetch(url)
  
  return (
    <div>
       <div>
       <h1>Custom Hooks!!!</h1>
        {
            ready ? <h3>READY!!! - useTimeout - customHooks</h3>:"not ready"
        }
       </div>
       <div>
        
        {
          data ?  data.map((r)=>{
            return <div key={r.id} >
                <h3>{r.login}</h3>
            </div>
        })
         : <h1>Loading...</h1>}
       </div>
    </div>
  )
}

export default TestHooks