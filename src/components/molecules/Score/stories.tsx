import { Story } from '@storybook/react'

import { Score, ScoreProps } from './index'

export default {
  component: Score,
  title: 'molecules/Score',
}

const Component: Story<ScoreProps> = (args) => <Score {...args} />

export const Base = Component.bind({})

Base.args = {
  label: '総合指数',
  level: 2,
}
