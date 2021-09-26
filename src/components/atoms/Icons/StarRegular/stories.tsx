import { StarRegularIcon } from './index'

export default {
  component: StarRegularIcon,
  title: 'atoms/Icons/StarRegularIcon',
}

const Component1 = () => <StarRegularIcon />

export const Base = Component1.bind({})

const Component2 = () => (
  <div style={{ height: '20px', width: '20px', color: 'red' }}>
    <StarRegularIcon />
  </div>
)

export const RedSmall = Component2.bind({})

const Component3 = () => (
  <div style={{ height: '100px', width: '100px', color: 'blue' }}>
    <StarRegularIcon />
  </div>
)

export const BlueLarge = Component3.bind({})