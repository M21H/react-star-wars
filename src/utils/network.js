import { SWAPI_PEOPLE, SWAPI_ROOT } from '../const/api'

export const getApiResources = async (url) => {
	try {
		const res = await fetch(url)

		if (!res.ok) {
			console.error('Could not fetch:', res.status)
			return false
		}
		return await res.json()
	} catch (error) {
		console.error('Could not fetch:', error.message)
		return false
	}
}

// getApiResources(SWAPI_ROOT + SWAPI_PEOPLE).then((data) => console.log(data))

// (async () => {
// 	const data = await getApiResources(SWAPI_ROOT + SWAPI_PEOPLE)
// 	console.log(data)
// })()
