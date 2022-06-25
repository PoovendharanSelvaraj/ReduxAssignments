import { ADD_COUNT, ADD_FAIL, ADD_REQUEST, ADD_TODO, EDIT_SUCCESS, REMOVE_REQUEST, REMOVE_SUCCESS, SUBS_COUNT, TASK_REQUEST, Todo_Failure, 
    Todo_Request, Todo_Success, TOGGLE_FAILURE, TOGGLE_REQUEST, TOGGLE_SUCCESS } from "./actions.types"



const InitialState={
    count:0,
    todos:[],
    isLoading:false,
    isError:false,

}



export const reducer=(state=InitialState,action)=>{
   const {type,payload} = action;
   switch(type){
    case ADD_COUNT:
      return { ...state , count: state.count + payload }
    case SUBS_COUNT:
        return {...state, count : state.count - payload}
    case Todo_Request:
        return {...state, isLoading:true,isError:false}
    case Todo_Success:
        return {...state,todos: [...state.todos,...payload],isLoading:false, isError:false}
    case Todo_Failure:
        return {...state,isLoading:false ,isError:true}
    case ADD_REQUEST:
        return {...state,isLoading:true, isError:false}
    case ADD_TODO: 
        return {...state, todos:[...state.todos, ...payload],isLoading:false, isError:false}
    case ADD_FAIL:
        return {...state, isError:true}
    case TASK_REQUEST:
        return {...state, isLoading:true}
    case TOGGLE_REQUEST:
            return {...state, isLoading:true}
    case TOGGLE_SUCCESS:
        let toggledStatus = state.todos.map(item=> item.id === payload.id? payload : item)
       return {...state, todos:toggledStatus,isLoading:false ,isError:false}
    case TOGGLE_FAILURE:
        return {...state, isError:true}
    case EDIT_SUCCESS:
        let editedTodo = state.todos.map(item=> item.id === payload.id? payload : item)

        return{...state, todos:editedTodo,isLoading:false ,isError:false}
    case REMOVE_SUCCESS:
        let remove = state.todos.filter(item=>item.id !== payload.id )
        return {...state, todos:remove, isLoading:false, isError:false}
    case REMOVE_REQUEST: 
        return {...state,isLoading:true}    
    default: 
       return state;
   }
}