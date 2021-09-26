import { DetailedHTMLProps, FC, ButtonHTMLAttributes } from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/colors'

const { COLOR_61CACE, COLOR_FFFFFF } = colors

export type ButtonProps = Omit<
  DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>,
  'ref'
> & {
  children: string
}

export const Button: FC<ButtonProps> = (props) => {
  const { children, ...buttonProps } = props

  return <StyledButton {...buttonProps}>{children}</StyledButton>
}

const StyledButton = styled.button`
    background-color:${COLOR_61CACE};
    border-color: transparent;
    cursor: pointer;
    color: ${COLOR_FFFFFF};
    font-size: 20px;
    text-align: center;
    padding: 15px 0;
    width 100%;
`
