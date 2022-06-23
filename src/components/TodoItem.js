import React from 'react'
export default function TodoItem({todo, index}) {
    return (
        <li className='todo-item'>
           <strong>{++index}.</strong> {todo.title}
        </li>
    )
}