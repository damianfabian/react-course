import React from 'react'
import Footer from './Footer.js'
import AddTodo from './containers/AddTodo.js'
import VisibleTodoList from './containers/VisibleTodoList.js'

const App = () => (
  <div className="container">
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
)

export default App