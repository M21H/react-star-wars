import PropsType from 'prop-types'
import { useDispatch } from 'react-redux'

import { setPersonToFavotite, removePersonFromFavotite } from '@store/actions'
import iconFav from '@assets/icons/favorite.svg'
import iconFavFill from '@assets/icons/favorite-fill.svg'

import styles from './PersonPhoto.module.css'

const PersonPhoto = ({ personId, personPhoto, personName, personFavorite, setPersonFavorite }) => {
	const dispatch = useDispatch()

	const dispatchFavoritePeople = () => {
		if (personFavorite) {
			dispatch(removePersonFromFavotite(personId))
			setPersonFavorite(false)
		} else {
			dispatch(
				setPersonToFavotite({
					[personId]: {
						name: personName,
						img: personPhoto,
					},
				})
			)
			setPersonFavorite(true)
		}
	}

	return (
		<>
			<div className={styles.container}>
				<img className={styles.photo} src={personPhoto} alt={personName} />
				<img
					src={personFavorite ? iconFavFill : iconFav}
					alt='add to favorite'
					className={styles.favorite}
					onClick={dispatchFavoritePeople}
				/>
			</div>
		</>
	)
}

export default PersonPhoto

PersonPhoto.PropsType = {
	personId: PropsType.string,
	personPhoto: PropsType.string,
	personName: PropsType.string,
	personFavorite: PropsType.bool,
	setPersonFavorite: PropsType.func,
}
