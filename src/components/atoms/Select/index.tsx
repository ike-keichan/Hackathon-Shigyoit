import { DetailedHTMLProps, VFC, SelectHTMLAttributes } from 'react'
import styled from 'styled-components'

import { colors } from '@/styles/colors'

const { COLOR_61CACE, COLOR_CED2E3, COLOR_FFFFFF } = colors

export type SelectProps = Omit<
  DetailedHTMLProps<SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement>,
  'ref'
> & {
  options: Array<{ id: string; name: string }>
}

export const Select: VFC<SelectProps> = (props) => {
  const { options, ...selectProps } = props

  return (
    <Root>
      <SelectWrapper>
        <StyledSelect {...selectProps}>
          {options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}
            </option>
          ))}
        </StyledSelect>
      </SelectWrapper>
    </Root>
  )
}

const Root = styled.div`
  position: relative;
`

const SelectWrapper = styled.div`
  background-color: ${COLOR_FFFFFF};
  border: 1px solid ${COLOR_CED2E3};
  border-radius: 4px;

  ::before {
    background-color: ${COLOR_61CACE};
    border-radius: 0 3px 3px 0;
    content: '';
    display: block;
    min-height: 24px;
    position: absolute;
    pointer-events: none;
    right: 1px;
    width: 12px;
  }

  ::after {
    border-bottom: solid 2px ${COLOR_FFFFFF};
    border-right: solid 2px ${COLOR_FFFFFF};
    content: '';
    display: block;
    height: 3px;
    position: absolute;
    pointer-events: none;
    top: 40%;
    transform: rotate(45deg);
    right: 4px;
    width: 3px;
  }
`

const StyledSelect = styled.select`
  appearance: none;
  border: none;
  cursor: pointer;
  min-height: 24px;
  width 100%;
`
