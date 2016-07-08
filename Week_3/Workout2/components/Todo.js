import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text }) => (
	<li className='todo'>
		<div className={ completed ? 'todo-left-side active' : 'todo-left-side' } onClick={onClick}>
			<span className={ completed ? 'fa fa-check-square-o' : 'fa fa-square-o' } aria-hidden="true"></span>
		</div>
		<div className='todo-right-side'>
		  <button type="button" className="close" aria-label="Close"><span aria-hidden="true">×</span></button>
		  <h3 className="todo-title">{text}</h3>
		</div>
	</li>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo