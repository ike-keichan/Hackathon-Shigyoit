import { SignInIcon } from './index'

export default {
  component: SignInIcon,
  title: 'atoms/Icons/SignInIcon',
}

const Component1 = () => <SignInIcon />

export const Base = Component1.bind({})

const Component2 = () => (
  <div style={{ height: '20px', width: '20px', color: 'red' }}>
    <SignInIcon />
  </div>
)

export const RedSmall = Component2.bind({})

const Component3 = () => (
  <div style={{ height: '100px', width: '100px', color: 'blue' }}>
    <SignInIcon />
  </div>
)

export const BlueLarge = Component3.bind({})
