import React from 'react'
import PropsType from 'prop-types'
import cn from 'classnames'

import '../index.css'
import styles from './UiButton.module.css'

const UiButton = ({ theme = 'dark', text, onClick, disabled, classes }) => {
	return (
		<button className={cn(styles.button, styles[theme], classes)} onClick={onClick} disabled={disabled}>
			{text}
		</button>
	)
}

export default UiButton

UiButton.propsType = {
	text: PropsType.string,
	onClick: PropsType.func,
	disabled: PropsType.bool,
	theme: PropsType.string,
	classes: PropsType.string,
}
