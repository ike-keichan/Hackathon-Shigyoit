import { Fragment } from 'react'
import { GlobalStyle } from '@/styles/global'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <Fragment>
      <div id={'__next'}>{Story()}</div>
    </Fragment>
  ),
]
