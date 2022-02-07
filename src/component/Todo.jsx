import React, { useState } from 'react'
import styles from './todo.module.css'
import TodoInput from './TodoInput';
const Todo = ({todo,onDeleteItem,onUpdate}) => {
    const [isStriked,setIsStriked] =useState(false)
    const [isEditmodeOn,setisEditmodeOn]=useState(false);
    const onAdd= (newAdd)=>{
        onUpdate({
            ...newAdd,
            id:todo.id
        });
        setisEditmodeOn(false);
    }
    return (
        <li className={styles.todoItem}>
                {isEditmodeOn? (
                    <TodoInput onAdd={onAdd}/>
                ):(
                    <>
                    <input type="checkbox" onChange={()=>setIsStriked(!isStriked)}/>

                    <span className={
                        isStriked?styles.strike:styles.normal
                    }>{todo.value}
                    </span>
                    </>
                )}
                
                <button onClick={()=>onDeleteItem(todo)}>Delete</button>
                <button onClick={()=>setisEditmodeOn(!isEditmodeOn)}>{isEditmodeOn?"cancel Edit":"Edit"}</button>
                </li>

    )
}

export default Todo

