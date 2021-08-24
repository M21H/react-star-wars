import React from 'react'
import PropsType from 'prop-types'
import { Link } from 'react-router-dom'

import { UiButton } from '@ui'

import styles from './PeopleNav.module.css'

const PeopleNav = ({ getResource, prevPage, nextPage, currentPage }) => {
	const handleChangePrev = () => getResource(prevPage)
	const handleChangeNext = () => getResource(nextPage)

	return (
		<div className={styles.container}>
			<Link to={`/people/?page=${currentPage - 1}`} className={styles.buttons}>
				<UiButton text='Prev' onClick={handleChangePrev} disabled={!prevPage} />
			</Link>
			<Link to={`/people/?page=${currentPage + 1}`} className={styles.buttons}>
				<UiButton text='Next' onClick={handleChangeNext} disabled={!nextPage} />
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
