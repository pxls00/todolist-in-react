import React from 'react'
import TodoList from './components/TodoList';
import Context from './context';
import TodoForm from './components/TodoForm'
function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy Bread'},
    {id: 2, completed: true, title: 'Buy Pen'},
    {id: 3, completed: false, title: 'Buy Tomatoes'}
  ])
  function todoToggle(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        return todo
      })
    )
  }
  function removeTodo(id) {
    setTodos(
      todos.filter(todo => todo.id !== id)
    )
  }
  function addTodos(todo) {
    setTodos(
      todos.concat([todo])
    )
  }
  return (
    <Context.Provider value={{removeTodo, todoToggle, addTodos}}>
      <div className="wrapper">
          <TodoForm />
        <h1 className='title-form'>Todo List</h1>
        <form>
          {todos.length ? <TodoList todos={todos}/> : <p className='todo-no-message'>No Todos...</p>}
        </form>
      </div>
    </Context.Provider>
  )
}

export default App;
