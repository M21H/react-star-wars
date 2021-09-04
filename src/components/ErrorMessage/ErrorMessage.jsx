import { UiVideo } from '@ui'

import video from '@assets/video/han-solo.mp4'
import styles from './ErrorMessage.module.css'

const ErrorMessage = () => {
	return (
		<>
			<p className={styles.text}>
				The dark side of the force has won. We cannot display data. Come back when we fix everything.
			</p>
			<UiVideo src={video} className={styles.video} playbackRate={1} />
		</>
	)
}

export default ErrorMessage
