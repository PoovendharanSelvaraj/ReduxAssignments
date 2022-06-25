import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {useParams,useNavigate} from "react-router-dom";
import {  RemoveRequest, RemoveSucces, ToggleRequest, ToggleSuccess } from '../redux/actions';

const TodoPage = () => {
   const tasks= useSelector(state=>state.todos);
   const {id}= useParams();
   const navigate = useNavigate();
   const dispatch = useDispatch();
   const [currentTodo,setCurrentTodo]=useState({});
   const handleStatus=(id, newStatus)=>{
        const request = ToggleRequest();
        dispatch(request);
       axios.patch(`http://localhost:8080/todos/${id}`,{status: newStatus})
       .then(r=>dispatch(ToggleSuccess(r.data))).catch((error)=>console.log(error))
   } 
   const handleDelete=(id)=>{
         let remove = RemoveRequest();
         dispatch(remove)
         axios.delete(`http://localhost:8080/todos/${id}`).then((r)=>{dispatch(RemoveSucces(id)); navigate('/') }).catch((e)=>console.log(e))
   }
    useEffect(()=>{
            let currentTodo= tasks.find((item)=>item.id === Number(id));
            currentTodo && setCurrentTodo(currentTodo);

    },[tasks,id])
  return (
    <div>
        <h2>Todo Page</h2>
        <h3>
            {currentTodo?.todo}
        </h3>
        <h2>Status: {currentTodo?.status? "true" : "false"}</h2>
        <button onClick={()=>handleStatus(currentTodo.id,!currentTodo.status)} >Toggle</button>
        <button onClick={()=>navigate("/todo/:id")} >EDIT</button>
        <button onClick={()=>handleDelete(currentTodo.id)  }>Remove</button>                        
    </div>
  )
}

export default TodoPage