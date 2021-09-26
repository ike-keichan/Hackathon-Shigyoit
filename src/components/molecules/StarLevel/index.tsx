import { VFC } from 'react'
import styled from 'styled-components'

import { VerySmileIcon } from '@/components/atoms/Icons/VerySmile'
import { colors } from '@/styles/colors'

const { COLOR_EB7676 } = colors

export type StarLevelProps = {
  level: number
}

// TODO: 置き換える
export const StarLevel: VFC<StarLevelProps> = (props) => {
  const { level = 0 } = props

  const displayLevel = level > 5 ? 5 : level < 0 ? 0 : level

  return (
    <Root>
      {[...Array(displayLevel)].map((_, index) => (
        <VerySmileIcon key={index} />
      ))}
      {[...Array(5 - displayLevel)].map((_, index) => (
        <VerySmileIcon key={index} />
      ))}
    </Root>
  )
}

const Root = styled.div`
  color: ${COLOR_EB7676};
  display: flex;
  width: 100%;
`
