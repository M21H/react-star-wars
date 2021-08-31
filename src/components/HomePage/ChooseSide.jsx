import PropTypes from 'prop-types'
import cn from 'classnames'

import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from '@context/ThemeProvider'

import imgLigth from '@assets/img/light-side.jpg'
import imgDark from '@assets/img/dark-side.jpg'
import imgNeitral from '@assets/img/neitral-side.jpg'

import styles from './ChooseSide.module.css'

const ChooseSideItem = ({ theme, text, img, classes }) => {
	const isTheme = useTheme()
	return (
		<div className={cn(styles.item, classes)} onClick={() => isTheme.change(theme)}>
			<div className={styles.item__header}>{text}</div>
			<img className={styles.item__img} src={img} alt={text} />
		</div>
	)
}

ChooseSideItem.propTypes = {
	theme: PropTypes.string,
	text: PropTypes.string,
	img: PropTypes.string,
	classes: PropTypes.string,
}

const ChooseSide = () => {
	const elements = [
		{ theme: THEME_LIGHT, text: 'Ligth Side', img: imgLigth, classes: styles.item__ligth },
		{ theme: THEME_DARK, text: 'Dark Side', img: imgDark, classes: styles.item__dark },
		{ theme: THEME_NEITRAL, text: 'Neitral Side', img: imgNeitral, classes: styles.item__neitral },
	]
	return (
		<div className={styles.container}>
			{elements.map((elem, index) => (
				<ChooseSideItem key={index} {...elem} />
			))}
		</div>
	)
}

export default ChooseSide
