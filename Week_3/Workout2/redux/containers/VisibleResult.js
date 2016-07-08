import { connect } from 'react-redux'
import PanelResult from '../components/PanelResult.js'

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
)(PanelResult)

export default VisibleResult