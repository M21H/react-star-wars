import { Route, Switch } from 'react-router-dom'

import { routesConfig } from '@routes/routesConfig'
import { Header } from '@components'

import styles from './App.module.css'

const App = () => {
	return (
		<div className={styles.wrapper}>
			<Header />
			<Switch>
				{routesConfig.map(({ path, exact, component }, index) => (
					<Route key={index} path={path} exact={exact} component={component} />
				))}
			</Switch>
		</div>
	)
}

export default App
