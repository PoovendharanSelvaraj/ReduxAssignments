import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import { add_count, subs_count } from '../redux/actions';

const Counter = () => {
    // // const [count,setCount] = useState(0);
    const dispatch = useDispatch();
    const count = useSelector(state=>state.count)
    const handleAddition=()=>{
        dispatch(add_count(1));
    }
    const handleSubs=()=>{
        dispatch(subs_count(1))
    }
  return (
    <div>
        <h1>Counter: {count}</h1>
        <button onClick={handleAddition} >Increment</button>
        <button onClick={handleSubs} >Decrement</button>
    </div>
  )
}

export default Counter