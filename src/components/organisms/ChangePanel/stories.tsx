import { Story } from '@storybook/react'

import { ChangePanel, ChangePanelProps } from './index'

export default {
  component: ChangePanel,
  title: 'organisms/ChangePanel',
}

const Component: Story<ChangePanelProps> = (args) => <ChangePanel {...args} />

export const Base = Component.bind({})

const rightContents = () => <div>right</div>
const leftContents = () => <div>left</div>

Base.args = {
  RightPanel: rightContents,
  LeftPanel: leftContents,
}
