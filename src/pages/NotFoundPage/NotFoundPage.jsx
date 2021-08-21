import React from 'react'
import { useLocation } from 'react-router'
import img from '@assets/img/not-found.png'

import styles from './NotFoundPage.module.css'

const NotFoundPage = () => {
	const { pathname } = useLocation()

	return (
		<>
			<img className={styles.img} src={img} alt='not founded' />
			<p className={styles.text}>
				No match for: <u>{pathname}</u>
			</p>
		</>
	)
}

export default NotFoundPage
