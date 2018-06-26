import React from 'react'
import { Link } from 'react-router-dom'

const COMEDIES = [ "All's Well That Ends Well", "As You Like It", "Comedy of Errors", "Love's Labour's Lost", "Measure for Measure", "Merchant of Venice", "Merry Wives of Windsor", "Midsummer Night's Dream", "Much Ado about Nothing", "Taming of the Shrew", "The Tempest", "Twelfth Night", "Two Gentlemen of Verona", "Winter's Tale" ]
const HISTORIES = [ "Henry IV, Part I", "Henry IV, Part II", "Henry V", "Henry VI, Part I", "Henry VI, Part II", "Henry VI, Part III", "Henry VIII", "King John", "Pericles", "Richard II", "Richard III" ]
const TRAGEDIES = [ "Antony and Cleopatra", "Coriolanus", "Cymbeline", "Hamlet", "Julius Caesar", "King Lear", "Macbeth", "Othello", "Romeo and Juliet", "Timon of Athens", "Titus Andronicus", "Troilus and Cressida" ]
const POEMS = [ "Sonnets", "Venus and Adonis", "The Rape of Lucrece" ]

const Contents = () => (
	<div className='navigation'>
		<div>
			<ul className='nav'>
				<h2>Comedies</h2>
				{COMEDIES.map(title => {
					let url = title.toLowerCase().replace(/ /gi, '-').replace(/'/gi, '')
					return <li key={title}><Link to={'/' + url}>{title}</Link></li>
				})}
			</ul>
		</div>
		<div>
			<ul className='nav'>
				<h2>Tragedies</h2>
				{TRAGEDIES.map(title => {
					let url = title.toLowerCase().replace(/ /gi, '-')
					return <li key={title}><Link to={'/' + url}>{title}</Link></li>
				})}
			</ul>
		</div>
		<div>
			<ul className='nav'>
				<h2>Histories</h2>
				{HISTORIES.map(title => {
					let url = title.toLowerCase().replace(/ /gi, '-').replace(/,/gi, '')
					return <li key={title}><Link to={'/' + url}>{title}</Link></li>
				})}
			</ul>
		</div>
		<div>
			<ul className='nav'>
				<h2>Poems</h2>
				{POEMS.map(title => {
					let url = title.toLowerCase().replace(/ /gi, '-').replace(/,/, '')
					return <li key={title}><Link to={'/' + url}>{title}</Link></li>
				})}
			</ul>
		</div>
	</div>
)

export default Contents
