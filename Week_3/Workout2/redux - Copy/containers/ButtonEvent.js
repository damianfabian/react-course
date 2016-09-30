import { connect } from 'react-redux'
import Button from '../components/Button.js'

const mapStateToProps = (state, ownProps) => {
  return { 
  		text: ownProps.text,
  		numbers: state.numbers 
   }
}

const event = (action, numbers) => {
    if (!numbers[0].trim() || !numbers[1].trim()) {
      return
    }
    dispatch(action([numbers[0],numbers[1]]));
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {

    onClick: (values) => {
      dispatch(event(ownProps.action, values))
    }
  }
}

const ButtonEvent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Button)

export default ButtonEvent