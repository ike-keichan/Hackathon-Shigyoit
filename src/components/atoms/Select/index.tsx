import { DetailedHTMLProps, VFC, SelectHTMLAttributes } from 'react'

export type SelectProps = DetailedHTMLProps<
  SelectHTMLAttributes<HTMLSelectElement>,
  HTMLSelectElement
> & {
  options: Array<{ id: string; name: string }>
}

export const Select: VFC<SelectProps> = (props) => {
  const { options, ...selectProps } = props

  return (
    <div>
      <select {...selectProps}>
        {options.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
