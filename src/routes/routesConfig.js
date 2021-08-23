import { HomePage, NotFoundPage, PeoplePage } from '@pages'

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
