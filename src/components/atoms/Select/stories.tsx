import { Story } from '@storybook/react'

import { Select, SelectProps } from './index'

export default {
  component: Select,
  title: 'atoms/Select',
}

const Component: Story<SelectProps> = (args) => <Select {...args} />

export const Base = Component.bind({})

Base.args = {
  options: [
    { id: '1', name: 'AAAA' },
    { id: '2', name: 'BBBB' },
    { id: '3', name: 'CCCC' },
  ],
}
