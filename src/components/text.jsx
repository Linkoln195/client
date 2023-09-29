import React from 'react'
import textStyle from './text.module.css'

const Text = ({ textContent }) => {
	return (
		<div>
			<p className={textStyle.text}>{textContent}</p>
		</div>
	)
}

export default Text
