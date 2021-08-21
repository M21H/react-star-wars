import PeoplePage from '@pages/PeoplePage'
import HomePage from '@pages/HomePage'
import NotFoundPage from '@pages/NotFoundPage'

export const routesConfig = [
	{
		path: '/',
		exact: true,
		component: HomePage,
	},
	{
		path: '/people',
		exact: true,
		component: PeoplePage,
	},
	{
		path: '*',
		exact: false,
		component: NotFoundPage,
	},
]