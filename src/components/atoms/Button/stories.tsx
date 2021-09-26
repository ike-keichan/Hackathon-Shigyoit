import { Story } from '@storybook/react'

import { Button, ButtonProps } from './index'

export default {
  component: Button,
  title: 'atoms/Button',
}

const Component: Story<ButtonProps> = ({ children, ...buttonProps }) => (
  <Button {...buttonProps}>{children}</Button>
)

export const Base = Component.bind({})

Base.args = {
  children: 'あの人の気分も調べる',
}
