import { HomePage, NotFoundPage, PeoplePage, PersonPage, FavoritePage, SearchPage } from '@pages'

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
		path: '/search',
		exact: true,
		component: SearchPage,
	},
	{
		path: '/not-found',
		exact: true,
		component: NotFoundPage,
	},
	{
		path: '*',
		exact: false,
		component: NotFoundPage,
	},
]
