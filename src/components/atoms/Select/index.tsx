import { DetailedHTMLProps, VFC, SelectHTMLAttributes } from 'react'
import styled from 'styled-components'

export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Array<{ id: string; name: string }>
}

export const Select: VFC<SelectProps> = (props) => {
  const { options, ...selectProps } = props

  return (
    <Root>
      <StyledSelect {...selectProps}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </StyledSelect>
    </Root>
  )
}

const Root = styled.div`
  width: 300px;
  background-color: red;
`

const StyledSelect = styled.select`
  width: 100%;
`
