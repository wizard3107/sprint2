import React, { useState } from 'react'
import Todo from './Todo';
import TodoInput from './TodoInput';
const Todos = () => {
    const [todos, setTodos] = useState([]);
    const onAdd = (newTodo)=>{
        setTodos([...todos,newTodo])
    }
    const onUpdate = (itemToUpdate)=>{
        const newTodoList=todos.map((todo)=>{
            if(todo.id=== itemToUpdate.id)
            {
                return itemToUpdate;
            }
            else{
                return todo
            }
        });
        setTodos(newTodoList); 
    }
    const onDeleteItem = (itemToDelete)=>{
        const newTodoList=todos.filter((todo)=>todo.id!== itemToDelete.id);
        setTodos(newTodoList);
    }
    return (
        <div>
            <TodoInput onAdd={onAdd} />
            <div>
                <ul>
                    {todos.map((todo) =>{
                        return <Todo key = {todo.id} todo={todo } onDeleteItem = {onDeleteItem} onUpdate={onUpdate}/>}
                    )}
                </ul>
            </div>
        </div>

    )
}

export default Todos

