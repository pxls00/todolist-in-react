import React from 'react'
import PropTypes from 'prop-types'

function TodoItem({todo, index}) {
    return (
        <li className='todo-item'>
           <strong>{++index}.</strong> {todo.title}
        </li>
    )
}
TodoItem.prototype = {
    todo: PropTypes.object.isRequired,
    index: PropTypes.number
} 

export default TodoItem