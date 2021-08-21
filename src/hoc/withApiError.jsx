import { useState } from 'react'
import ErrorMessage from '@components/ErrorMessage'

export const withApiError = (View) => {
	return (props) => {
		const [errorAPI, setErrorAPI] = useState(false)

		return <>{errorAPI ? <ErrorMessage /> : <View setErrorAPI={setErrorAPI} {...props} />}</>
	}
}
