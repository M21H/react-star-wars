import {
	HTTP,
	HTTPS,
	SWAPI_ROOT,
	SWAPI_PEOPLE,
	GUIDE_IMG_EXTENSION,
	URL_IMG_PERSON,
	SWAPI_PARAM_PAGE,
} from '@const/api'

const _checkProtocol = (url) => {
	if (url.indexOf(HTTPS) !== -1) {
		return HTTPS
	}

	return HTTP
}

export const getPeoplePageId = (url) => {
	const position = url.lastIndexOf(SWAPI_PARAM_PAGE)
	const id = url.slice(position + SWAPI_PARAM_PAGE.length, url.length)
	
	return Number(id)
}

export const getId = (url, category) => {
	const protocol = _checkProtocol(url)
	const id = url.replace(protocol + SWAPI_ROOT + category, '').replace(/\//g, '')
	return id
}

export const getPeopleId = (url) => getId(url, SWAPI_PEOPLE)

export const getPeopleImg = (id) => `${URL_IMG_PERSON}/${id}${GUIDE_IMG_EXTENSION}`
