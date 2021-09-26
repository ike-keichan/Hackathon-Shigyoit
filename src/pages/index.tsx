import { VerySadIcon } from '@/components/atoms/Icons/VerySad'
import { Home } from '@/components/templates/Home'

const rightContents = () => <img src={'/Sample1.png'} alt={'Sample1'} height="100%" width="100%" />
const leftContents = () => (
  <div>
    <VerySadIcon />
  </div>
)

const args = {
  heading: '良いでしょう',
  text: '今日のあの人はお天気なのでハッピー気分！でも遊ぶことに気分が向いているかもしれないので、集中力はあまりないかもしれません。',
  averageLevel: 5,
  moodLevel: 4,
  workLevel: 3,
  weatherPainLevel: 2,
  RightPanel: rightContents,
  LeftPanel: leftContents,
}

export default function Root() {
  return <Home {...args} />
}
