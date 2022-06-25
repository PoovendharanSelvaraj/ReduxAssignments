import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import axios from "axios";
import { AddTodoRequest, AddTodoSuccess, TodoFailure, TodoRequest, TodoSuccess } from '../redux/actions';
// import {v4 as uuid} from "uuid"
import TodoLists from './TodoLists';


const Todo = () => {
    const dispatch = useDispatch();
    const todotasks = useSelector(state=>state.todos);
    const [text,setText]=useState("");
   
    const addTodo = ()=>{
        const payload = { todo:text, status:false }
        handleAdd(payload).then((res)=>{getData()}).catch((error) =>{console.log(error);})
    }
    
   const handleAdd= async (payload)=>{
    const loading = AddTodoRequest();
    dispatch(loading)
    return axios.post("http://localhost:8080/todos",payload)
    .then((r)=>{
         const success=AddTodoSuccess(r.data);
         dispatch(success)
        })
    .catch((error)=>{
        dispatch(TodoFailure(error));
    })
   }


    const getData = async ()=>{
        const loading = TodoRequest();
        dispatch(loading)
        return axios.get("http://localhost:8080/todos")
        .then((r)=>{
             const success=TodoSuccess(r.data);
             dispatch(success)
            })
        .catch((error)=>{
            dispatch(TodoFailure(error));
        })
       
    }

//    console.log(todotasks)
    useEffect(()=>{
       if(todotasks?.length===0){
        getData();
       }

    },[]) 
  return (
    <div>
        <h1>Todo</h1>
        <form action="" >
        <input type="text" placeholder='add some task' value={text}  onChange={(e)=>setText(e.target.value)} />
        <button onClick={addTodo}>Add</button>
        </form>
        <div>
           <TodoLists todoLists={todotasks} />
        </div>
    </div>
  )
}

export default Todo