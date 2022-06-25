import React from 'react'
import TodoList from './components/TodoList';
import Context from './context';
import TodoForm from './components/TodoForm';
import Loader from './components/Loader';
function App() {
  const [todos, setTodos] = React.useState([])
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(response => response.json())
      .then(todos => {
        setLoading(false)
        setTodos(todos)
      })
    }, 3000)
  }, [])
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
          {loading && <Loader />}
          {todos.length ? <TodoList todos={todos}/> : (loading ? null: <p>No Todos...</p>)}
      </div>
    </Context.Provider>
  )
}

export default App;
