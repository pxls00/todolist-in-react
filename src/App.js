import React from 'react'
import TodoList from './components/TodoList';
function App() {
  return (
    <div className="wrapper">
      <h1 className='title-form'>Todo List</h1>
      <form>
        <TodoList />
      </form>
    </div>
  )
}

export default App;
