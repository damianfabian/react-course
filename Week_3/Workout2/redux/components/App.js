import React from 'react'
import CalcForm from '../containers/CalcForm.js'
import PanelResult from '../containers/visibleResult.js'

const App = () => (
  <div className="content-container clearfix">
    <CalcForm />
    <PanelResult />
  </div>
)

export default App