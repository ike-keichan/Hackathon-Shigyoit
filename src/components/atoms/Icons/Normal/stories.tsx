import { NormalIcon } from './index'

export default {
  component: NormalIcon,
  title: 'atoms/Icons/NormalIcon',
}

const Component1 = () => <NormalIcon />

export const Base = Component1.bind({})

const Component2 = () => (
  <div style={{ height: '20px', width: '20px', color: 'red' }}>
    <NormalIcon />
  </div>
)

export const RedSmall = Component2.bind({})

const Component3 = () => (
  <div style={{ height: '100px', width: '100px', color: 'blue' }}>
    <NormalIcon />
  </div>
)

export const BlueLarge = Component3.bind({})
