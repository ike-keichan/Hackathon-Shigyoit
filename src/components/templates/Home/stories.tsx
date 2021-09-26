import { Story } from '@storybook/react'

import { Home, HomeProps } from './index'

export default {
  component: Home,
  title: 'templates/Home',
}

const Component: Story<HomeProps> = (args) => <Home {...args} />

export const Base = Component.bind({})

const rightContents = () => <div>right</div>
const leftContents = () => <div>left</div>

Base.args = {
  heading: '良いでしょう',
  text: '今日のあの人はお天気なのでハッピー気分！でも遊ぶことに気分が向いているかもしれないので、集中力はあまりないかもしれません。',
  averageLevel: 5,
  moodLevel: 4,
  workLevel: 3,
  weatherPainLevel: 2,
  RightPanel: rightContents,
  LeftPanel: leftContents,
}
