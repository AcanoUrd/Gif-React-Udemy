import { useEffect, useReducer } from "react"
import { todoReducer } from "../08-useReducer/todoReucer";
const init = () =>{
    return JSON.parse(localStorage.getItem('todos')) || []
}
export const useTodos = (initialState = []) => {
    const [todos, dispatch] = useReducer(todoReducer, initialState, init);
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    }, [todos])
    const handleNewTodo = (todo) =>{
        const addTodoAction = {
            type: '[TODO] add todo',
            payload: todo
        }
        dispatch(addTodoAction)
    }
    const handleDeleteTodo = (id) => {
        dispatch({
            type: '[TODO] remove todo',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: '[TODO] toggle todo',
            payload: id
        })
    }
    return {
        todos,
        todosCount: todos.length,
        todosPendingCount: todos.filter(todo=>!todo.done).length,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo
    }
}