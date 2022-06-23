import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo, index, todoToggle}) {
    const classes = []
    if (todo.completed) {
        classes.push('done')
    }
    return (
        <li className='todo-item'>
            <span 
                className={todo.completed ? 'todo-item__block done': 'todo-item__block'}
            >
                <input
                    type="checkbox"
                    className="todo-item__checkbox"
                    checked={todo.completed}
                    onChange={() => todoToggle(todo.id)}/>
                <strong>{++index}.</strong> 
                {todo.title}
            </span>
            <button className='todo-item__delete'>&times;</button>
        </li>
    )
}
TodoItem.prototype = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number,
    todoToggle: PropTypes.func.isRequired
} 

export default TodoItem