import { SadIcon } from './index'

export default {
  component: SadIcon,
  title: 'atoms/Icons/SadIcon',
}

const Component1 = () => <SadIcon />

export const Base = Component1.bind({})

const Component2 = () => (
  <div style={{ height: '20px', width: '20px', color: 'red' }}>
    <SadIcon />
  </div>
)

export const RedSmall = Component2.bind({})

const Component3 = () => (
  <div style={{ height: '100px', width: '100px', color: 'blue' }}>
    <SadIcon />
  </div>
)

export const BlueLarge = Component3.bind({})
