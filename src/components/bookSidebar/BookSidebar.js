import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import ArrowBack from '@material-ui/icons/ArrowBack'

import './styles.css'

class BookSidebar extends Component {
	render() {
		return (
			<div className='book-sidebar'>
				<Link to='/'>
					<ArrowBack />
				</Link>
			</div>
		)
	}
}

export default BookSidebar
