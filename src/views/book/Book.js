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

		if (!book) return 'Loading...'

		return (
			<div className='book-container'>

				{/* <BookSidebar book={book} /> */}
				<div className='book-sidebar'>
					<div className='sidebar-contents'>
						<Link
							to='/'
							role='link'
							aria-label='Back to main menu'
						>
							<ArrowBack />
						</Link>

						<p className='sidebar-title'>{book.title}</p>
						{book.text &&
							toArray(book.text).map((act, i) =>
								<div
									role='menu'
									key={randomString()}
								>
									<p
										role='heading'
										className='sidebar-small-heading'
									>
										{`Act ${i + 1}`}
									</p>
									<Scrollspy
										className='sidebar-nav'
										items={toArray(act.scenes).map((scene, j) => `act-${i + 1}-scene-${j + 1}`)}
										currentClassName="active-link"
									>
										{toArray(act.scenes).map((scene, j) =>
											<li
												role='menuitem'
												id={`Act${i + 1}Scene${j + 1}`}
												key={randomString()}
											>
												<a
													href={`#act-${i + 1}-scene-${j + 1}`}>
													{`Scene ${j + 1}`}
												</a>
											</li>
										)}
									</Scrollspy>
								</div>
							)
						}

					</div>
				</div>

				<div className='book-page'>
					<h2>{book.title}</h2>
					<p>{book.publishDate}</p>
					<Markdown html={book.cast} />

					{book.text &&
						toArray(book.text).map((act, i) =>
							<div key={randomString()}>
								{toArray(act.scenes).map((scene, j) =>
									<div
										key={randomString()}
										className='text'
									>
										<h4
											id={`act-${i + 1}-scene-${j + 1}`}
											aria-labelledby={`Act${i + 1}Scene${j + 1}`}
											role='heading'
										>
											Act {i + 1}, Scene {j + 1}
										</h4>
										<Markdown
											html={scene}
											aria-describedby={`act-${i + 1}-scene-${j + 1}`}
										/>
									</div>
								)}
							</div>
						)
					}

				</div>
			</div>
		)
	}
}

export default Book
