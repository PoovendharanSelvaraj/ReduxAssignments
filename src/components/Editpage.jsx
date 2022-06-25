import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from "react-router-dom";
import { EditSuccess} from '../redux/actions';

const Editpage = () => {
    const [text,setText]=useState('')
   const tasks= useSelector(state=>state.todos);
   const {id}= useParams();
   const dispatch = useDispatch();
   const [currentTodo,setCurrentTodo]=useState({});
   const handleStatus=(id, newTodo)=>{
        
       axios.patch(`http://localhost:8080/todos/${id}`,{todo: newTodo})
       .then(r=>dispatch(EditSuccess(r.data))).catch((error)=>console.log(error))
   } 
    useEffect(()=>{
            let currentTodo= tasks.find((item)=>item.id === Number(id));
            currentTodo && setCurrentTodo(currentTodo);

    },[tasks,id])
    console.log(currentTodo)
  return (
    <div>
     
        <h3>
            Old Task : {currentTodo?.todo}
        </h3>
         <input type="text" placeholder='new tasks' onChange={(e)=>setText(e.target.value)} value={text} />
        <button onClick={()=>handleStatus(currentTodo.id,text)} >Change task</button>
    </div>
  )
}

export default Editpage
