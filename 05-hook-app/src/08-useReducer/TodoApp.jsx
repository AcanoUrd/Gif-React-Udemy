import { TodoList } from "./TodoList"
import { TodoAdd } from "./TodoAdd"
import { useTodos } from "../hooks/useTodos"

export const TodoApp = () => {
    const { todos, todosCount, todosPendingCount, handleNewTodo, handleDeleteTodo, handleToggleTodo} = useTodos();
    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {todosPendingCount}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos = {todos} 
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                </div>
                <div className="col-5">
                    <TodoAdd 
                        onNewTodo = {handleNewTodo}
                    />
                </div>
            </div>
        </>
    )
}
