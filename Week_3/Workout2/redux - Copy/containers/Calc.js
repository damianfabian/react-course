import React from 'react'
import { connect } from 'react-redux'
import { sumNumbers, restNumbers, update } from '../actions'
import ButtonEvent from './ButtonEvent.js'

let Calc = ({ dispatch }) => {
  let input1, input2, result

  return (
    <div className="content-container clearfix">
          <div className="col-md-12">
              <h1 className="content-title">Numbers</h1>
              <div className="form-group">
                <input ref={node => { input1 = node }} type="text" className="form-control" placeholder="Fill a number" onChange={ dispatch( update([input1,input2]) ) } />
                <input ref={node1 => { input2 = node1 }} type="text" className="form-control" placeholder="Fill a number" onChange={ dispatch( update([input1,input2]) ) }/>
              </div>
              <div className="form-group text-center">
                
                <ButtonEvent text="Sum" action={sumNumbers} className="fa fa-send" />
              <button id="btn-add-todo" onClick={ e => {
                                                      e.preventDefault();
                                                      if (!input1.value.trim() || !input2.value.trim()) {
                                                        return
                                                      }
                                                      dispatch(restNumbers([input1,input2]));
                                                      input1.value = '';
                                                      input2.value = ''
                                                    }
                                                  } 
              className="btn btn-success"><span className="fa fa-send"></span> Rest</button>
              </div>
          </div>
    </div>
  )
}
Calc = connect()(Calc)

export default Calc