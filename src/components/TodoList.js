import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList(props) {
    return (
        <ul className='todo-list'>
            {props.todos.map((todo, i) => {
               return <TodoItem todo={todo} key={todo.id} index={i}/>
            })}
        </ul>
    )
}