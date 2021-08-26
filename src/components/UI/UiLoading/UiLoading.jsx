import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'

import loaderRed from '@assets/icons/loader-red.svg'
import loaderBlue from '@assets/icons/loader-blue.svg'
import loaderBlack from '@assets/icons/loader-black.svg'

import styles from './UiLoading.module.css'

const UiLoading = ({ theme = 'red', isShadow = true, classes }) => {
	const [loaderTheme, setLoaderTheme] = useState(null)

	useEffect(() => {
		switch (theme) {
			case 'red':
				setLoaderTheme(loaderRed)
				break
			case 'blue':
				setLoaderTheme(loaderBlue)
				break
			case 'black':
				setLoaderTheme(loaderBlack)
				break
			default:
				setLoaderTheme(loaderRed)
		}
	}, [theme])

	return <img className={cn(styles.loader, isShadow && styles.shadow, classes)} src={loaderTheme} alt='loader' />
}

export default UiLoading

UiLoading.propTypes = {
	theme: PropTypes.string,
	isShadow: PropTypes.bool,
	classes: PropTypes.string,
}
