import { HomePage, NotFoundPage, PeoplePage, PersonPage, FavoritePage } from '@pages'

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
		path: '/favorites',
		exact: true,
		component: FavoritePage,
	},
	{
		path: '*',
		exact: false,
		component: NotFoundPage,
	},
]
