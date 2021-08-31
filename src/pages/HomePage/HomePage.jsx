import React from 'react'

import { ChooseSide } from '@components'

import styles from './HomePage.module.css'

const HomePage = () => {
	return (
		<>
			<h2 className='header__text'>Home page</h2>
			<ChooseSide />
		</>
	)
}

export default HomePage
