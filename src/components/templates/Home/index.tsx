import { VFC } from 'react'
import styled from 'styled-components'

import { Select } from '@/components/atoms/Select'
import { ChangePanel } from '@/components/organisms/ChangePanel'
import { Footer } from '@/components/organisms/Footer'
import { Status } from '@/components/organisms/Status'
import { colors } from '@/styles/colors'

const { COLOR_878787, COLOR_FFFFFF } = colors

export type HomeProps = {
  heading: string
  text: string
  averageLevel: number
  moodLevel: number
  workLevel: number
  weatherPainLevel: number
  LeftPanel: VFC
  RightPanel: VFC
}

export const Home: VFC<HomeProps> = (props) => {
  const { LeftPanel, RightPanel, ...statusProps } = props

  return (
    <Root>
      <div>header</div>
      <SelectArea>
        <SelectTitle>天気によるあの人の気分</SelectTitle>
        <Select options={[]} />
        <Select options={[]} />
        <Select options={[]} />
        <Select options={[]} />
        <Select options={[]} />
        <Select options={[]} />
      </SelectArea>
      <StatusArea>
        <Status {...statusProps} />
      </StatusArea>
      <PanelArea>
        <PanelTitle>今の世界</PanelTitle>
        <ChangePanel RightPanel={RightPanel} LeftPanel={LeftPanel}></ChangePanel>
      </PanelArea>
      <Footer />
    </Root>
  )
}

const Root = styled.div`
  background-color: ${COLOR_FFFFFF};
`

const SelectArea = styled.div`
  margin: 0 auto 25px;
  width: 80%;

  > * + * {
    margin-bottom: 20px;
  }

  > :first-child {
    margin-top: 0;
    margin-bottom: 25px;
  }

  > :nth-child(2) {
    margin-bottom: 10px;
  }

  > :last-child {
    margin-bottom: 0;
  }

  @media (min-width: 400px) {
    width: 320px;
  }
`

const SelectTitle = styled.p`
  color: ${COLOR_878787};
  font-size: 16px;
  text-align: center;
`

const StatusArea = styled.div`
  margin: 0 auto;
  width: 80%;
`

const PanelArea = styled.div`
  margin: 0 auto;
  width: 80%;
`

const PanelTitle = styled.p`
  color: ${COLOR_878787};
  font-size: 14px;
  margin-top: 0;
  margin-bottom: 15px;
`
