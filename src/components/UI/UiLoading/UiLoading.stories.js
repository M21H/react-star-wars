import UiLoading from './UiLoading'

export default {
	component: UiLoading,
	title: 'Ui-Kit/UiLoading',
}

const Template = (args) => <UiLoading {...args} />

const props = {
	theme: 'red',
	isShadow: false,
	classes: '',
}

export const Red = Template.bind({})

Red.args = {
	...props,
	theme: 'red',
}

export const Blue = Template.bind({})

Blue.args = {
	...props,
	theme: 'blue',
}

export const Black = Template.bind({})

Black.args = {
	...props,
	theme: 'black',
}
