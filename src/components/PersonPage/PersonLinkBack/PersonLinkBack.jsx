import { useHistory } from 'react-router-dom'
import iconBack from '@assets/icons/left-arrow.svg'

import styles from './PersonLinkBack.module.css'

const PersonLinkBack = () => {
	const history = useHistory()

	const handleGoBack = (e) => {
		e.preventDefault()
		history.goBack()
	}

	return (
		<a className={styles.link} href='#' onClick={handleGoBack}>
      <img className={styles.link__img} src={iconBack} alt='icon go back' />
			<span>Go back</span>
		</a>
	)
}

export default PersonLinkBack
