import type { Meta, StoryObj } from '@storybook/react'

import { Banner } from './Banner'

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
const meta = {
	title: 'Example/Banner',
	component: Banner,
	parameters: {
		// Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
		layout: 'centered',
	},
	// This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
	tags: ['autodocs'],
} satisfies Meta<typeof Banner>

export default meta
type Story = StoryObj<typeof meta>

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Discover: Story = {
	args: {
		role: 'discover',
	},
}
export const Hire: Story = {
	args: {
		role: 'hire',
	},
}
