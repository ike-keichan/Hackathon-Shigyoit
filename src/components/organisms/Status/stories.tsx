import { Story } from '@storybook/react'

import { Status, StatusProps } from './index'

export default {
  component: Status,
  title: 'organisms/Status',
}

const Component: Story<StatusProps> = (args) => <Status {...args} />

export const Base = Component.bind({})

Base.args = {
  heading: '良いでしょう',
  text: '今日のあの人はお天気なのでハッピー気分！でも遊ぶことに気分が向いているかもしれないので、集中力はあまりないかもしれません。',
  averageLevel: 5,
  moodLevel: 4,
  workLevel: 3,
  weatherPainLevel: 2,
}
