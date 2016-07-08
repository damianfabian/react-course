import React, { PropTypes } from 'react'
  
  const Button = ({ className, text, onClick }) => {
    return (
      <button id="btn-add-todo" onClick={ e => {e.preventDefault(); onClick()} } className="btn btn-success"><span className={ className }></span> { text }</button>
    )
  }

  Button.propTypes = {
    className: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    onClick: PropTypes.func
  }

  export default Button