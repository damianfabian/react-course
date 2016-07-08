import React, { PropTypes } from 'react'
import Calc from '../containers/calc.js'
  
  const Button = ({ className, text, onClick, values }) => {
    return (
      <button id="btn-add-todo" onClick={ e => {e.preventDefault(); onClick(values)} } className="btn btn-success"><span className={ className }></span> { text }</button>
    )
  }

  Button.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    values: PropTypes.array.isRequired
  }

  export default Button