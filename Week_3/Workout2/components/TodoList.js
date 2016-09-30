import React, { PropTypes } from 'react'
import Todo from './Todo.js'

const TodoList = ({ todos, onTodoClick }) => (
  <div className="content-container clearfix">
      <div className="col-md-12">
          <h1 className="content-title">Todo</h1>
          <ul id="ul-todo" className="todo-list">
            {todos.map(todo =>
              <Todo
                key={todo.id}
                {...todo}
                onClick={() => onTodoClick(todo.id)}
              />
            )}
          </ul>
      </div>
  </div>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList