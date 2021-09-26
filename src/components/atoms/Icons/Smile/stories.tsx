import { SmileIcon } from './index'

export default {
  component: SmileIcon,
  title: 'atoms/Icons/SmileIcon',
}

const Component1 = () => <SmileIcon />

export const Base = Component1.bind({})

const Component2 = () => (
  <div style={{ height: '20px', width: '20px', color: 'red' }}>
    <SmileIcon />
  </div>
)

export const RedSmall = Component2.bind({})

const Component3 = () => (
  <div style={{ height: '100px', width: '100px', color: 'blue' }}>
    <SmileIcon />
  </div>
)

export const BlueLarge = Component3.bind({})
