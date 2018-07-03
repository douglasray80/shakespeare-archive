import React, { Component, Fragment } from 'react'
import { Switch, Route, Link } from 'react-router-dom'

import 'typeface-open-sans-condensed'
import 'typeface-cormorant-unicase'
import 'typeface-cormorant-garamond'

import { Contents, Header } from '../components'
import { Book } from '../views'

import './styles.css'

const App = () => {
	return (
		<div className='app-container'>
			<Switch>
				<Route
					exact
					path='/'
					render={() => (
						<Fragment>
							<Header />
							<div className='main-container'>
								<div className='banner'></div>
								<Contents />
							</div>
						</Fragment>
					)}
				/>
				<Route
					exact
					path='/about'
					render={() => (
						<Fragment>
							<p>Under construction</p>
						</Fragment>
					)}
				/>
				<Route
					exact
					path='/resources'
					render={() => (
						<Fragment>
							<p>Under construction</p>
						</Fragment>
					)}
				/>
				<Route path='/:book' component={Book} />
			</Switch>
		</div>
	)
}

export default App
