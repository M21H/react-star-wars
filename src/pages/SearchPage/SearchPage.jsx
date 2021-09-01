import { useState, useEffect, useCallback } from 'react'
import PropTypes from 'prop-types'
import { debounce } from 'lodash'

import { withApiError } from '@hoc/withApiError'
import { SearchPageInfo } from '@components'
import { UiInput } from '@components/UI'
import { getPeopleId, getPeopleImg } from '@services/getPeopleData'
import { getApiResources } from '@utils/network'
import { API_SEARCH } from '@const/api'

import styles from './SearchPage.module.css'

const SearchPage = ({ setErrorAPI }) => {
	const [inputValue, setInputValue] = useState('')
	const [people, setPeople] = useState([])

	const getResponse = async (param) => {
		const res = await getApiResources(API_SEARCH + param)
		if (res) {
			const popleList = res.results.map(({ name, url }) => {
				const id = getPeopleId(url)
				const img = getPeopleImg(id)
				return {
					id,
					name,
					img,
				}
			})
			setPeople(popleList)
			setErrorAPI(false)
		} else {
			setErrorAPI(true)
		}
	}

	useEffect(() => {
		getResponse('')
	}, [])

	const debounceGetResponse = useCallback(
		debounce((value) => getResponse(value), 300),
		[]
	)

	const handleInputChange = (value) => {
		setInputValue(value)
		debounceGetResponse(value)
	}
	return (
		<>
			<h1 className='header__text'>Search</h1>
			<UiInput
				value={inputValue}
				handleInputChange={handleInputChange}
				placeholder="Input character's name"
				classes={styles.input__search}
			/>
			<SearchPageInfo people={people} />
		</>
	)
}

export default withApiError(SearchPage)

SearchPage.propTypes = {
	setErrorAPI: PropTypes.func,
}
