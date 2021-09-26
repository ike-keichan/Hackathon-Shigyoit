import { Home } from '@/components/templates/Home'

const rightContents = () => <div>right</div>
const leftContents = () => <div>left</div>

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
