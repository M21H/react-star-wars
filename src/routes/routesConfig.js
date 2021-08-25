import { HomePage, NotFoundPage, PeoplePage, PersonPage } from '@pages'

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
		path: '/people/:id',
		exact: true,
		component: PersonPage,
	},
	{
		path: '*',
		exact: false,
		component: NotFoundPage,
	},
]
