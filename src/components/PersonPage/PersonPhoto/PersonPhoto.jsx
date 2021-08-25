import PropsType from 'prop-types'

import styles from './PersonPhoto.module.css'

const PersonPhoto = ({ personPhoto, personName }) => {
	return (
		<div className={styles.container}>
			<img  className={styles.photo} src={personPhoto} alt={personName} />
		</div>
	)
}

export default PersonPhoto

PersonPhoto.PropsType = {
	personPhoto: PropsType.string,
	personName: PropsType.string,
}
