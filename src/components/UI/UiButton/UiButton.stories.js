import UiButton from './UiButton'

export default {
	component: UiButton,
	title: 'Ui-Kit/UiButton',
}

const Template = (args) => <UiButton {...args} />

const props = {
	theme: 'dark',
	text: 'Hello',
	onClick: () => console.log('Button click'),
	disabled: false,
	classes: '',
}

export const Light = Template.bind({})

Light.args = {
	...props,
	theme: 'light',
}

export const Dark = Template.bind({})

Dark.args = {
	...props,
	theme: 'dark',
}

export const Disabled = Template.bind({})

Disabled.args = {
	...props,
	disabled: true,
}
