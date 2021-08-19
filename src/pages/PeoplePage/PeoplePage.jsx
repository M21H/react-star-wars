import { useEffect, useState } from 'react'
import { getApiResources } from '../../utils/network'
import { API_PEOPLE } from '../../const/api'
import { getPeopleId, getPeopleImg } from '../../services/getPeopleData'
import PeopleList from '../../components/PeopleList'

const PeoplePage = () => {
	const [people, setPeople] = useState(null)

	const getResource = async (url) => {
		const { results } = await getApiResources(url)

		setPeople(
			results.map(({ name, url }) => {
				const id = getPeopleId(url)
				const img = getPeopleImg(id)
				return { id, name, img }
			})
		)
	}

	useEffect(() => {
		getResource(API_PEOPLE)
	}, [])

	return <>{people && <PeopleList people={people} />}</>
}

export default PeoplePage
