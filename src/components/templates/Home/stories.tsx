import { Home } from './index'

export default {
  component: Home,
  title: 'templates/Home',
}

const Component = () => <Home />

export const Base = Component.bind({})
