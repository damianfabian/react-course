import React, { PropTypes } from 'react'

const PanelResult = ({ result }) => (
	<div className="col-md-6">
		  <h1 className="title-content"> {result}</h1>
	</div>

)

PanelResult.propTypes = {
  result: PropTypes.number.isRequired,
}

export default PanelResult