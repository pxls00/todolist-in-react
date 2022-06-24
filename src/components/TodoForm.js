import React, {useContext, useState} from 'react'
import Context from '../context'

function NewTodo() {
    let [value, setValue] = useState('')
    const {addTodos} = useContext(Context)
    function createTodo() {
        if(value.trim()) {
            addTodos({
                id: Date.now(),
                completed: false,
                title: value
            })
        }
        setValue(
            value = ''
        )
    }
    return (
        <div className='form-todo'>
            <input placeholder='Need to do..' value={value} onInput={event => setValue(value = event.target.value)}/>
            <button onClick={(e) => createTodo()}>Submit</button>
        </div>
    )
}

export default NewTodo