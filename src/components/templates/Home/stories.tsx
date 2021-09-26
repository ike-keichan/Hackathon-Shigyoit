import { Story } from '@storybook/react'

import { Home, HomeProps } from './index'
import { VerySadIcon } from '@/components/atoms/Icons/VerySad'

export default {
  component: Home,
  title: 'templates/Home',
}

const Component: Story<HomeProps> = (args) => <Home {...args} />

export const Base = Component.bind({})

const rightContents = () => <img src={'/Sample1.png'} alt={'Sample1'} height="100%" width="100%" />
const leftContents = () => (
  <div>
    <VerySadIcon />
  </div>
)

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
