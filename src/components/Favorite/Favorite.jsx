import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import icon from '@assets/icons/bookmark.svg'

import styles from './Favorite.module.css'

const Favorite = () => {
	const [count, setCount] = useState()
	const storeData = useSelector(({ favoriteReducer }) => favoriteReducer)

	useEffect(() => {
		const length = Object.keys(storeData).length
		length.toString().length > 2 ? setCount('...') : setCount(length)
		setCount(length)
	}, [storeData])

	return (
		<div className={styles.container}>
			<Link to='/favorites'>
				<span className={styles.counter}>{count}</span>
				<img src={icon} alt='bookmark' className={styles.icon} />
			</Link>
		</div>
	)
}

export default Favorite
