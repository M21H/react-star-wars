import { useEffect, useState } from 'react'
import PropsType from 'prop-types'

import { withApiError } from '@hoc/withApiError'
import { getApiResources, changeHTTP } from '@utils/network'
import { getPeopleId, getPeopleImg, getPeoplePageId } from '@services/getPeopleData'
import { API_PEOPLE } from '@const/api'
import { useQueryParams } from '@hooks/useQueryParams'
import { PeopleList, PeopleNav } from '@components'

import styles from './PeoplePage.module.css'

const PeoplePage = ({ setErrorAPI }) => {
	const [people, setPeople] = useState(null)
	const [prevPage, setPrevPage] = useState(null)
	const [nextPage, setNextPage] = useState(null)
	const [currentPage, setCurrentPage] = useState(1)
	const query = useQueryParams()
	const queryPage = query.get('page')

	const getResource = async (url) => {
		const res = await getApiResources(url)

		if (res) {
			setPeople(
				res.results.map(({ name, url }) => {
					const id = getPeopleId(url)
					const img = getPeopleImg(id)
					return { id, name, img }
				})
			)
			setNextPage(changeHTTP(res.next))
			setPrevPage(changeHTTP(res.previous))
			setCurrentPage(getPeoplePageId(url))
			setErrorAPI(false)
		} else {
			setErrorAPI(true)
		}
	}

	useEffect(() => {
		getResource(API_PEOPLE + queryPage)
	}, [])

	return (
		<>
			<PeopleNav getResource={getResource} prevPage={prevPage} nextPage={nextPage} currentPage={currentPage} />
			{people && <PeopleList people={people} />}
		</>
	)
}

export default withApiError(PeoplePage)

PeoplePage.propsType = {
	setErrorAPI: PropsType.func,
}
