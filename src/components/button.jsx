import axios from 'axios'
import React, { useEffect, useState } from 'react'
import buttonStyle from './button.module.css'
import clickerStyles from './clicker.module.css'
import Text from './text.jsx'

const Button = () => {
	const [count, setCount] = useState(0)

	useEffect(() => {
		axios.get('https://clickerbd.onrender.com/get-clicks').then(response => {
			setCount(response.data)
		})
	}, [])

	const onButtonClick = () => {
		axios
			.post('https://clickerbd.onrender.com/count-add', {
				clickCount: count + 1,
			})
			.then(console.log('Success'))
			.catch(err => {
				return console.log(err)
			})
		setCount(count + 1)
	}

	return (
		<div className={clickerStyles.clicker}>
			<Text textContent={count} />
			<button className={buttonStyle.button} onClick={onButtonClick}>
				Click
			</button>
		</div>
	)
}

export default Button
