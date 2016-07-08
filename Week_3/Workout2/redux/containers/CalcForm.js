import React from 'react'
import { connect } from 'react-redux'
import { sumNumbers, restNumbers, mulNumbers, divNumbers, update } from '../actions'
import Button from '../components/Button.js'

let CalcForm = ({ dispatch }) => {
  let input1, input2, result

  const handleChange = (event) => {
    dispatch( update(input1.value , input2.value) );
  }

  const handleClick = (func) => {

    if(input1 != undefined && input2 != undefined)
      dispatch( func(input1.value , input2.value) );
  }

  return (
          <div className="col-md-6">
              <div className="form-group">
                <span>Number</span><input ref={node => input1 = node} type="text" className="form-control" placeholder="Ej: 3" onChange={ handleChange } />
                <span>Number</span><input ref={node => input2 = node} type="text" className="form-control" placeholder="Ej: 3" onChange={ handleChange } />
              </div>
              
              <div className="form-group text-center">
                
              <Button text="+" onClick={ (e) => handleClick(sumNumbers) } className="fa fa-send" />
              <Button text="-" onClick={ (e) => handleClick(restNumbers) } className="fa fa-send" />
              <Button text="*" onClick={ (e) => handleClick(mulNumbers) } className="fa fa-send" />
              <Button text="/" onClick={ (e) => handleClick(divNumbers) } className="fa fa-send" />
              
              </div>
          </div>
          )
}

CalcForm = connect()(CalcForm)

export default CalcForm