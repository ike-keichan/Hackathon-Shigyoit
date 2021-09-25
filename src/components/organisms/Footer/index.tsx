import { VFC } from 'react'
import { colors } from '../../../styles/colors'
import styled from 'styled-components'

const {COLOR_61CACE, COLOR_FFFFFF} = colors

export const Footer = () =>(
    <Root>
        <Contents>
            Copyright © PichiPichi Ichinensei All right reserved.
        </Contents>
    </Root>
)

const Root = styled.footer`
    background-color:${COLOR_61CACE};
    text-align: center;
    padding: 10px 0;
    width: 100%;
`

const Contents = styled.div`
    color: ${COLOR_FFFFFF};
    font-size: 10px;
    font-weight: bold;
`