import { VFC } from 'react'
import styled from 'styled-components'

import { useChangePanel } from './modules/useChangePanel'
import { colors } from '@/styles/colors'

const { COLOR_61CACE, COLOR_B8E7E8, COLOR_FFFFFF } = colors

export type ChangePanelProps = {
  LeftPanel: VFC
  RightPanel: VFC
}

export const ChangePanel: VFC<ChangePanelProps> = (props) => {
  const { LeftPanel, RightPanel } = props

  const { isSelectedRight, handleSelectLeft, handleSelectRight } = useChangePanel()

  return (
    <Root>
      <ButtonArea>
        <PanelButton isSelected={!isSelectedRight} onClick={handleSelectLeft}>
          天気
        </PanelButton>
        <PanelButton isSelected={isSelectedRight} onClick={handleSelectRight}>
          気温
        </PanelButton>
      </ButtonArea>
      <PanelArea>{isSelectedRight ? <LeftPanel /> : <RightPanel />}</PanelArea>
    </Root>
  )
}

const Root = styled.div`
  height: auto;
  width: 100%;
`

const ButtonArea = styled.div`
  display: flex;
  width: 100%;

  > * + * {
    margin-left: 1px;
  }
`

const PanelButton = styled.button<{ isSelected?: boolean }>`
  background-color: ${({ isSelected }) => (isSelected ? COLOR_61CACE : COLOR_B8E7E8)};
  border-color: transparent;
  color: ${COLOR_FFFFFF};
  cursor: pointer;
  font-wight: bold;
  width: 50%;

  &:hover {
    opacity: 0.7;
  }
`

const PanelArea = styled.div`
  height: calc(100vw * 2 / 3);
  width: 100%;
`
