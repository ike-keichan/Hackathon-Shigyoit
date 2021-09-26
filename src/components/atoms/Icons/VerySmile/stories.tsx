import { VerySmileIcon } from './index'

export default {
  component: VerySmileIcon,
  title: 'atoms/Icons/VerySmileIcon',
}

const Component1 = () => <VerySmileIcon />

export const Base = Component1.bind({})

const Component2 = () => (
  <div style={{ height: '20px', width: '20px', color: 'red' }}>
    <VerySmileIcon />
  </div>
)

export const RedSmall = Component2.bind({})

const Component3 = () => (
  <div style={{ height: '100px', width: '100px', color: 'blue' }}>
    <VerySmileIcon />
  </div>
)

export const BlueLarge = Component3.bind({})
