import { useRef, useEffect } from 'react'
import PropType from 'prop-types'
import cn from 'classnames'

import styles from './UiVideo.module.css'

const UiVideo = ({ src, classes, playbackRate = 1 }) => {
	const videoRef = useRef()

	useEffect(() => {
		videoRef.current.playbackRate = playbackRate
	}, [])

	return (
		<video className={cn(styles.video, classes)} ref={videoRef} loop autoPlay muted>
			<source src={src} />
		</video>
	)
}

export default UiVideo

UiVideo.propType = {
	src: PropType.string,
	playbackRate: PropType.number,
	classes: PropType.string,
}
