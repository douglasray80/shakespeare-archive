import React, { Component, Fragment } from 'react'
import { Link } from 'react-router-dom'
import ArrowBack from '@material-ui/icons/ArrowBack'

import Scrollspy from 'react-scrollspy'

import { BookSidebar, Markdown } from '../../components'
import { randomString, toArray } from '../../helpers'

import './styles.css'

class Book extends Component {

	componentDidMount() {
		this.props.getBook()
	}

	componentWillUnmount () {
		this.props.closeBook()
	}

	render() {
		const { book } = this.props
		console.log(book)

		if (!book) return 'Loading...'

		return (
			<div className='book-container'>

				{/* <BookSidebar book={book} /> */}
				<div className='book-sidebar'>
					<div className='sidebar-contents'>
						<Link to='/'>
							<ArrowBack />
						</Link>

						<ul>
							{book.text &&
								toArray(book.text).map((act, i) =>
								<div key={randomString()}>
									<h4>{`Act ${i + 1}`}</h4>
									<Scrollspy
										items={toArray(act.scenes).map((scene, j) => `scene-${j + 1}`)}
										currentClassName="active-link"
									>
										{toArray(act.scenes).map((scene, j) =>
											<li key={randomString()}>
												<a href={`#scene-${j + 1}`}>{`Scene ${j + 1}`}</a>
											</li>
										)}
									</Scrollspy>
								</div>
							)}
						</ul>
					</div>
				</div>

				<div className='book-page'>
					<h2>{book.title}</h2>
					<p>{book.publishDate}</p>
					{/* <Markdown html={book.cast} /> */}

					{book.text &&
						toArray(book.text).map((act, i) =>
						<div key={randomString()}>
							{toArray(act.scenes).map((scene, j) =>
								<div key={randomString()}>
									<h4 id={`scene-${j + 1}`}>Act {i + 1}, Scene {j + 1}</h4>
									<Markdown html={scene} />
								</div>
							)}
						</div>
					)}

				</div>
			</div>
		)
	}
}

export default Book
