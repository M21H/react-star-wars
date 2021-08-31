import { NavLink } from 'react-router-dom'
import { Favorite } from '@components'

import styles from './Header.module.css'

const Header = () => {
	return (
		<div className={styles.container}>
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
					<Favorite />
				</li>
			</ul>
		</div>
	)
}

export default Header
