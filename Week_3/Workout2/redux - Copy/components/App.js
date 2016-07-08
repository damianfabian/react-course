import React from 'react'
import Calc from '../containers/calc.js'
import VisibleResult from '../containers/VisibleResult.js'

const App = () => (
  <div className="container">
    <Calc />
    <VisibleResult />
  </div>
)

export default App