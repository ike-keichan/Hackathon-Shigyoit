import { StarSolidIcon } from './index'

export default {
  component: StarSolidIcon,
  title: 'atoms/Icons/StarSolidIcon',
}

const Component1 = () => <StarSolidIcon />

export const Base = Component1.bind({})

const Component2 = () => (
  <div style={{ height: '20px', width: '20px', color: 'red' }}>
    <StarSolidIcon />
  </div>
)

export const RedSmall = Component2.bind({})

const Component3 = () => (
  <div style={{ height: '100px', width: '100px', color: 'blue' }}>
    <StarSolidIcon />
  </div>
)

export const BlueLarge = Component3.bind({})