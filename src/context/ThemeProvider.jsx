import React, { useContext, useState } from 'react'
import { changeCssVariablses } from '@services/changeCssVariablses'

export const THEME_LIGHT = 'ligth'
export const THEME_DARK = 'dark'
export const THEME_NEITRAL = 'neitral'

const ThemeContext = React.createContext()

export const ThemeProvider = ({ children, ...props }) => {
	const [theme, setTheme] = useState(null)

	const change = (name) => {
		setTheme(name)
    changeCssVariablses(name)
	}

	return (
		<ThemeContext.Provider
			value={{
				theme,
				change,
			}}
			{...props}
		>
			{children}
		</ThemeContext.Provider>
	)
}

export default ThemeProvider

export const useTheme = () => useContext(ThemeContext)
