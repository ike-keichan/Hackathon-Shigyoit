import { VFC } from 'react'
import styled from 'styled-components'

import { getIcon } from './modules/getIcon'
import { Score } from '@/components/molecules/Score'
import { StarLevel } from '@/components/molecules/StarLevel'
import { colors } from '@/styles/colors'

const { COLOR_000000, COLOR_878787 } = colors

export type StatusProps = {
  heading: string
  text: string
  averageLevel: number
  moodLevel: number
  workLevel: number
  weatherPainLevel: number
}

export const Status: VFC<StatusProps> = (props) => {
  const { heading, text, averageLevel, moodLevel, workLevel, weatherPainLevel } = props

  return (
    <Root>
      <TopArea>
        <TopLeftArea>
          <TopLeftAreaIcon>{getIcon(averageLevel)}</TopLeftAreaIcon>
          <StarLevel level={averageLevel} />
        </TopLeftArea>
        <TopRightArea>
          <TopRightAreaHeading>{heading}</TopRightAreaHeading>
          {text}
        </TopRightArea>
      </TopArea>
      <Horizontal>
        <Score label="総合指数" level={averageLevel} />
        <Score label="気分指数" level={moodLevel} />
      </Horizontal>
      <Horizontal>
        <Score label="仕事指数" level={workLevel} />
        <Score label="天気痛指数" level={weatherPainLevel} />
      </Horizontal>
    </Root>
  )
}

const Root = styled.div`
  width: 100%;
`

const TopArea = styled.div`
  display: flex;
  margin-bottom: 20px;
`

const TopLeftArea = styled.div`
  flex-basis: 25%;
  flex-shrink: 0;
  margin-right: 20px;
`

const TopLeftAreaIcon = styled.div`
  width: 100%;
  padding-top:100%

  ::before {
    content: '';
    display: block;
    padding-top: 50%;
  }
`

const TopRightArea = styled.div`
  color: ${COLOR_878787};
  flex-shrink: 1;
`

const TopRightAreaHeading = styled.h2`
  color: ${COLOR_000000};
  font-size: 20px;
  font-weight: bold;
  margin-top: 0;
`

const Horizontal = styled.div`
  display: flex;
  margin-bottom: 20px;

  > * + * {
    margin-left: 30px;
  }
`
