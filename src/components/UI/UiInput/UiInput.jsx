import React from 'react'
import PropType from 'prop-types'
import cn from 'classnames'

import icon from '@assets/icons/cancel.svg'

import '../index.css'
import styles from './UiInput.module.css'

const UiInput = ({ value, handleInputChange, placeholder, classes }) => (
	<>
		<div className={cn(styles.wrapper__input, classes)}>
			<input
				type='text'
				value={value}
				onChange={(e) => handleInputChange(e.target.value)}
				placeholder={placeholder}
				className={styles.input}
			/>
			<img
				className={cn(styles.clear, !value && styles.clear__disabled)}
				onClick={() => value && handleInputChange('')}
				src={icon}
				alt='clear'
			/>
		</div>
	</>
)

export default UiInput

UiInput.propTypes = {
	value: PropType.string,
	handleInputChange: PropType.func,
	placeholder: PropType.string,
	classes: PropType.string,
}
