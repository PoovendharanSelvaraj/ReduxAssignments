import { useEffect, useState } from 'react'

const useTimeout = (delay) => {
    const [ready, setReady] =useState(false);
  useEffect(() => {
    let timeout=setTimeout(()=>{
        setReady(true)
    },delay)
  
    return () => {
      clearTimeout(timeout);
    }
  }, [delay])
  return ready
}

export default useTimeout