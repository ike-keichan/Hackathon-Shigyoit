import styled from 'styled-components'

import { Select } from '@/components/atoms/Select'
import { ChangePanel } from '@/components/organisms/ChangePanel'
import { Footer } from '@/components/organisms/Footer'
import { colors } from '@/styles/colors'

const { COLOR_878787, COLOR_FFFFFF } = colors

// TODO: 仮置き
const rightContents = () => <div>right</div>
const leftContents = () => <div>left</div>

export const Home = () => {
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
      <PanelArea>
        <PanelTitle>今の世界</PanelTitle>
        <ChangePanel RightPanel={rightContents} LeftPanel={leftContents}></ChangePanel>
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
