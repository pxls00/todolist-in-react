import React, {useContext} from 'react'
import Context from '../context'
import Model from '../useModel'

function NewTodo() {
    const model = Model('')
    const {addTodos} = useContext(Context)
    function createTodo() {
        if(model.value().trim()) {
            addTodos({
                id: Date.now(),
                completed: false,
                title: model.value()
            })
        }
        model.clear()
    }
    return (
        <div className='form-todo'>
            <input placeholder='Need to do..' {...model.bind}/>
            <button onClick={(e) => createTodo()}>Submit</button>
        </div>
    )
}

export default NewTodo