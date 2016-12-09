import { connect } from 'react-redux'
import { fetchDepartures } from '../actions/DeparturesActions'
import Countdown from '../components/Countdown'

const mapStateToProps = (state, ownProps) => {
  return {
    isUpdating: state.isFetching
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onComplete: () => {
      dispatch(fetchDepartures())
    }
  }
}

const CountdownContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Countdown)

export default CountdownContainer