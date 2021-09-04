import { UiVideo } from '@ui'
import video from '@assets/video/han-solo.mp4'

export default {
	title: 'Ui-Kit/UiVideo',
	component: UiVideo,
}

const Template = (args) => <UiVideo {...args} />

const props = {
	src: video,
	playbackRate: 1,
	classes: '',
}

export const Default = Template.bind({})

Default.args = {
	...props,
}
