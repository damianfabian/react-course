import { connect } from 'react-redux'
import Result from '../components/Result.js'

const getResult = (state) => {
  switch (state.result) {
    case 'undefined':
      return 0;
    default:
      return state.result;
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    result: getResult(state)
  }
}


const VisibleResult = connect(
  mapStateToProps,
  {}
)(Result)

export default VisibleResult