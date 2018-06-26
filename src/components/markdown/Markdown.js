import React from 'react'
import PropTypes from 'prop-types'
import marked from 'marked'

const Markdown = ({ html }) => (
	<div
		dangerouslySetInnerHTML={{
			__html: marked(html)
		}}
	/>
)

Markdown.propTypes = {
	html: PropTypes.string.isRequired
}

export default Markdown
