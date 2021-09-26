import { Story } from '@storybook/react'

import { StarLevel, StarLevelProps } from './index'

export default {
  component: StarLevel,
  title: 'molecules/StarLevel',
}

const Component: Story<StarLevelProps> = (args) => <StarLevel {...args} />

export const Base = Component.bind({})

Base.args = {
  level: 2,
}
