import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import './styles.css'

const Header = () => (
	<div className='header'>
		<NavLink to='/'><h2>Shakespeare Archive</h2></NavLink>
		<div className='navbar'>
			<ul>
				<NavLink to='/'><li>Works</li></NavLink>
				<NavLink to='/about'><li>About</li></NavLink>
				<NavLink to='/resources'><li>Resources</li></NavLink>
			</ul>
		</div>
	</div>
)

export default Header
