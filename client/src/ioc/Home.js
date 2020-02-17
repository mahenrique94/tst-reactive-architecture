import Home from '../pages/Home'
import { selectors } from '../selectors/home'
import { actions } from '../actions/home'
import { connect } from 'react-redux'

const mapStateToProps = state => ({
    obj: selectors.getObj(state),
    list: selectors.getList(state),
    errors: selectors.getErrors(state),
    loading: selectors.getLoading(state),
})

const mapDispatchToProps = dispatch => ({
    dispatchCancel: () => dispatch(actions.cancel()),
    dispatchSave: values => dispatch(actions.save(values)),
    dispatchList: () => dispatch(actions.list()),
    dispatchEdit: id => dispatch(actions.edit({ id })),
    dispatchRemove: patient => dispatch(actions.remove(patient)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Home)
