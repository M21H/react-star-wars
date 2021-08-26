import { HTTP, HTTPS } from '@const/api'

/**
 * replace http to https
 * @param {String} url - current url for changing
 * @returns {String} - url with https
 */

export const changeHTTP = (url) => (url ? url.replace(HTTP, HTTPS) : url)

/**
 * fetch request
 * @param {String} url - url for fetching
 * @returns {Promise}
 */
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

export const makeConcurrentRequest = async (url) => {
	const res = await Promise.all(
		url.map((res) => {
			return fetch(res).then((res) => res.json())
		})
	)

	return res
}
