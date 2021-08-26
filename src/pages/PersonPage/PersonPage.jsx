import React, { useEffect, useState, Suspense } from 'react'
import PropsType from 'prop-types'

import { withApiError } from '@hoc/withApiError'

import { PersonInfo, PersonPhoto, PersonLinkBack } from '@components'
import { UiLoading } from '@ui'

import { getApiResources } from '@utils/network'
import { getPeopleImg } from '@services/getPeopleData'
import { API_PERSON } from '@const/api'

import styles from './PersonPage.module.css'

const PersonFilms = React.lazy(() => import('@components/PersonPage/PersonFilms/PersonFilms'))

const PersonPage = ({ setErrorAPI, match }) => {
	const [personInfo, setPersonInfo] = useState(null)
	const [personName, setPersonName] = useState(null)
	const [personPhoto, setPersonPhoto] = useState(null)
	const [personFilms, setPersonFilms] = useState(null)

	useEffect(() => {
		;(async () => {
			const { id } = match.params
			const res = await getApiResources(`${API_PERSON}/${id}`)
			if (res) {
				setPersonInfo([
					{ title: 'Height', data: res.height },
					{ title: 'Mass', data: res.mass },
					{ title: 'Heir color', data: res.hair_color },
					{ title: 'Skin color', data: res.skin_color },
					{ title: 'Birth year', data: res.birth_year },
					{ title: 'Gender', data: res.gender },
				])
				setPersonName(res.name)
				setPersonPhoto(getPeopleImg(id))

				res.films && setPersonFilms(res.films)

				setErrorAPI(false)
			} else {
				setErrorAPI(true)
			}
		})()
	}, [match])

	return (
		<>
			<PersonLinkBack />
			<div className={styles.wrapper}>
				<span className={styles.person__name}>{personName}</span>

				<div className={styles.container}>
					<PersonPhoto personPhoto={personPhoto} personName={personName} />
					{personInfo && <PersonInfo personInfo={personInfo} />}
					{personFilms && (
						<Suspense fallback={<UiLoading theme='red' isShadow />}>
							<PersonFilms personFilms={personFilms} />
						</Suspense>
					)}
				</div>
			</div>
		</>
	)
}

export default withApiError(PersonPage)

PersonPage.PropsType = {
	setErrorAPI: PropsType.func,
	match: PropsType.object,
}
