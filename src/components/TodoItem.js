import React, {useContext} from 'react'
import PropTypes from 'prop-types'
import Context from '../context'

function TodoItem({todo, index}) {
    const {removeTodo, todoToggle} = useContext(Context)
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
            <button className='todo-item__delete' onClick={() => {removeTodo(todo.id)}}>&times;</button>
        </li>
    )
}
TodoItem.prototype = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
} 

export default TodoItem