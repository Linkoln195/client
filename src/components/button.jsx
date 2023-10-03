import axios from 'axios'
import React, { useEffect, useState } from 'react'
import buttonStyle from './button.module.css'
import clickerStyles from './clicker.module.css'
import Loading from './loading.jsx'
import Text from './text.jsx'

const Button = () => {
	const [count, setCount] = useState(0)
	const [state, setState] = useState('loading')

	const getClicksCount = async () => {
		await axios
			.get('https://clickerbd.onrender.com/get-clicks')
			.then(response => {
				setCount(response.data)
				setState('loaded')
				console.log(response.data)
			})
	}

	useEffect(() => {
		getClicksCount()
	}, [])

	const onButtonClick = async () => {
		await axios
			.put('https://clickerbd.onrender.com/count-add', {
				clickCount: count + 1,
			})
			.then(console.log('Success'))
			.catch(err => {
				return console.log(err)
			})
		setCount(count + 1)
	}

	if (state == 'loading') {
		return (
			<div className={clickerStyles.clicker}>
				<Loading />
			</div>
		)
	} else if (state == 'loaded') {
		return (
			<div className={clickerStyles.clicker}>
				<Text textContent={count} />
				<button className={buttonStyle.button} onClick={onButtonClick}>
					Click
				</button>
			</div>
		)
	}
}

export default Button
