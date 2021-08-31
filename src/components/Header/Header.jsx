import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

import { Favorite } from '@components'
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider'

import imgDark from '@assets/icons/droid.svg'
import imgLigth from '@assets/icons/space-station.svg'
import imgNeitral from '@assets/icons/lightsaber.svg'

import styles from './Header.module.css'

const Header = () => {
	const [icon, setIcon] = useState(imgNeitral)
	const isTheme = useTheme()

	useEffect(() => {
		switch (isTheme.theme) {
			case THEME_LIGHT:
				setIcon(imgLigth)
				break
			case THEME_DARK:
				setIcon(imgDark)
				break
			case THEME_NEITRAL:
				setIcon(imgNeitral)
				break
			default:
				setIcon(imgNeitral)
		}
	}, [isTheme])

	return (
		<div className={styles.container}>
			<Link to='/'>
				<img className={styles.logo} src={icon} alt='logo' />
			</Link>

			<ul className={styles.list__container}>
				<li>
					<NavLink to='/' exact>
						Home
					</NavLink>
				</li>
				<li>
					<NavLink to='/people/?page=1'>People</NavLink>
				</li>
				<li>
					<NavLink to='/not-found'>Not found</NavLink>
				</li>
			</ul>
			<Favorite />
		</div>
	)
}

export default Header
