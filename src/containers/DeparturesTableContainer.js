import { connect } from 'react-redux'
import DeparturesTable from '../components/DeparturesTable'

const mapStateToProps = (state, ownProps) => {
  return {
    data: state.data
  }
}
const DeparturesTableContainer = connect(
  mapStateToProps
)(DeparturesTable)

export default DeparturesTableContainer