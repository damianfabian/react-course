import React, { PropTypes } from 'react'

const Result = ({ result }) => (
	<div className="col-md-12">
        <h1 className="content-title">{result}</h1>
  	</div>
)

Result.propTypes = {
  result: PropTypes.number.isRequired,
}

export default Result