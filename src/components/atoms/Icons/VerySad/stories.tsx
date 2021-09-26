import { VerySadIcon } from './index'

export default {
  component: VerySadIcon,
  title: 'atoms/Icons/VerySadIcon',
}

const Component1 = () => <VerySadIcon />

export const Base = Component1.bind({})

const Component2 = () => (
  <div style={{ height: '20px', width: '20px', color: 'red' }}>
    <VerySadIcon />
  </div>
)

export const RedSmall = Component2.bind({})

const Component3 = () => (
  <div style={{ height: '100px', width: '100px', color: 'blue' }}>
    <VerySadIcon />
  </div>
)

export const BlueLarge = Component3.bind({})