import { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import { PeopleList } from '@components'
import styles from './FavoritePage.module.css'

const FavoritePage = () => {
	const storData = useSelector(({ favoriteReducer }) => favoriteReducer)
	const [people, setPeople] = useState([])

	useEffect(() => {
		const arr = Object.entries(storData)
		if (arr.length) {
			const res = arr.map((item) => ({
				id: item[0],
				...item[1],
			}))
			setPeople(res)
		}
	}, [])

	return (
		<>
			<h1 className='header__text'>Favorites</h1>
			{people.length ? <PeopleList people={people} /> : <h2 className={styles.comment}>No data</h2>}
		</>
	)
}

export default FavoritePage
