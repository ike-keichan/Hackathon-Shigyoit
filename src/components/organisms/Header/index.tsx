import styled from 'styled-components'

import { Logo } from '@/components/atoms/Logo'
import { colors } from '@/styles/colors'

const { COLOR_FFFFFF } = colors

export const Header = () => (
  <Root>
    <Contents>
      <Logo />
    </Contents>
  </Root>
)

const Root = styled.footer`
  background-color: ${COLOR_FFFFFF};
  width: 100%;
`

const Contents = styled.div`
  width: 40%;
  margin-right: auto;
  margin-left: auto;
`
