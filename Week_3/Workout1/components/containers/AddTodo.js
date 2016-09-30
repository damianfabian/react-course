import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let AddTodo = ({ dispatch }) => {
  let input

  return (
    <div className="content-container clearfix">
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
          <div className="col-md-12">
              <h1 className="content-title">Add Todo</h1>
              <div className="form-group">
                <input ref={node => { input = node }} type="text" className="form-control" placeholder="What's in your mind?" />
              </div>
              <div className="form-group text-center">
                <button id="btn-add-todo" type="submit" className="btn btn-success"><span className="fa fa-send"></span> Create</button>
              </div>
          </div>
      </form>
    </div>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo