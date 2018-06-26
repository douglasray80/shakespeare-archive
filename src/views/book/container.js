import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import Book from './Book'

import { closeBook, getBook } from '../../store/database/actions'

const mapStateToProps = state => ({
	book: state.db.book
})

const mapDispatchToProps = (dispatch, ownProps) => ({
	getBook: (book) => dispatch(getBook(ownProps.match.params.book)),
	closeBook: () => dispatch(closeBook())
})

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Book))
