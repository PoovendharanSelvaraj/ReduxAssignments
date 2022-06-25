import * as types from "./actions.types"




const add_count = (payload)=>{
    return {type:types.ADD_COUNT, payload}
}

const subs_count = (payload)=>{
    return {type:types.SUBS_COUNT,payload}
}

const TodoRequest = ()=>{
    return {type:types.Todo_Request}
}
const TodoSuccess = (payload)=>{
    return {type:types.Todo_Success, payload}
}
const TodoFailure = (payload)=>{
    return {type:types.Todo_Failure,payload}
}

const AddTodoSuccess = (payload)=>{
    return {type: types.ADD_TODO,payload}
}
const AddTodoRequest = ()=>{
    return {type: types.ADD_REQUEST}
}
const AddTodoFail = (payload)=>{
    return {type: types.ADD_FAIL,payload}
}


const ToggleSuccess=(payload)=>{
    return {type: types.TOGGLE_SUCCESS,payload}
}
const ToggleRequest = ()=>{
    return {type: types.TOGGLE_REQUEST}
}
const ToggleFailure = ()=>{
    return {type: types.TOGGLE_FAILURE}
}

const EditSuccess =(payload)=>{
    return {type:types.EDIT_SUCCESS}
}
const RemoveSucces = (payload)=>{
    return {type: types.REMOVE_SUCCESS,payload}
}
const RemoveRequest = ()=>{
    return {type: types.REMOVE_REQUEST}
}

export {add_count,subs_count,TodoFailure,TodoRequest,TodoSuccess,AddTodoFail,AddTodoRequest,AddTodoSuccess,
         ToggleSuccess,ToggleRequest,ToggleFailure,EditSuccess,RemoveSucces,RemoveRequest };