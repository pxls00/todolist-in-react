import React from 'react'
import TodoList from './components/TodoList';
function App() {
  let todos = [
    {id: 1, completed: false, title: 'Buy Bread'},
    {id: 2, completed: false, title: 'Buy Pen'},
    {id: 3, completed: false, title: 'Buy Potatos'}
  ]
  return (
    <div className="wrapper">
      <h1 className='title-form'>Todo List</h1>
      <form>
        <TodoList todos={todos}/>
      </form>
    </div>
  )
}

export default App;
