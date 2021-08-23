import React from 'react'
import PropsType from 'prop-types'
import { Link } from 'react-router-dom'

import styles from './PeopleNav.module.css'

const PeopleNav = ({ getResource, prevPage, nextPage, currentPage }) => {
	const handleChangePrev = () => getResource(prevPage)
	const handleChangeNext = () => getResource(nextPage)

	return (
		<div>
			<Link to={`/people/?page=${currentPage - 1}`} className={styles.link}>
				<button className={styles.buttons} onClick={handleChangePrev} disabled={!prevPage}>
					Prev
				</button>
			</Link>
			<Link to={`/people/?page=${currentPage + 1}`} className={styles.link}>
				<button className={styles.buttons} onClick={handleChangeNext} disabled={!nextPage}>
					Next
				</button>
			</Link>
		</div>
	)
}

export default PeopleNav

PeopleNav.propsType = {
	getResource: PropsType.func,
	prevPage: PropsType.string,
	nextPage: PropsType.string,
	currentPage: PropsType.number,
}
