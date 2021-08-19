import { useEffect, useState } from 'react'
import { getApiResources } from '@utils/network'
import { API_PEOPLE } from '@const/api'
import { getPeopleId, getPeopleImg } from '@services/getPeopleData'
import PeopleList from '@components/PeopleList'
import { withApiError } from '@hoc/withApiError'

const PeoplePage = ({ setErrorAPI }) => {
	const [people, setPeople] = useState(null)

	const getResource = async (url) => {
		const { results } = await getApiResources(url)

		if (results) {
			setPeople(
				results.map(({ name, url }) => {
					const id = getPeopleId(url)
					const img = getPeopleImg(id)
					return { id, name, img }
				})
			)
			setErrorAPI(false)
		} else {
			setErrorAPI(true)
		}
	}

	useEffect(() => {
		getResource(API_PEOPLE)
	}, [])

	return (
		<>
			<h2>Navigations</h2>
			{people && <PeopleList people={people} />}
		</>
	)
}

export default withApiError(PeoplePage)
