import { css } from 'styled-components'

import { colors } from './colors'

const { COLOR_878787 } = colors

// ベーススタイル
export const base = css`
  body {
    background-color: white;
    color: ${COLOR_878787};
    font-family: 'Helvetica Neue', Arial, 'Hiragino Kaku Gothic ProN', 'Hiragino Sans', Meiryo,
      sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    color: inherit;
    font: inherit;
  }
`
