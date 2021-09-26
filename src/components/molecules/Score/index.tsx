import { VFC } from 'react'
import styled from 'styled-components'

import { StarLevel } from '@/components/molecules/StarLevel'
import { colors } from '@/styles/colors'

const { COLOR_878787 } = colors

export type ScoreProps = {
  label: string
  level: number
}

export const Score: VFC<ScoreProps> = (props) => {
  const { label, level = 0 } = props

  return (
    <Root>
      <Label>{label}</Label>
      <Level>
        <StarLevel level={level} />
      </Level>
    </Root>
  )
}

const Root = styled.div``

const Label = styled.p`
  color: ${COLOR_878787};
  font-size: 14px;
  margin: 0;
`

const Level = styled.div`
  display: flex;
`
