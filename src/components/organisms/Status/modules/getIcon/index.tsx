import { VerySmileIcon } from '@/components/atoms/Icons/VerySmile'

type GetIcon = (level: number) => any

// TODO: 置き換える
export const getIcon: GetIcon = (level) => {
  switch (level) {
    case 1:
      return <VerySmileIcon />
    case 2:
      return <VerySmileIcon />
    case 3:
      return <VerySmileIcon />
    case 4:
      return <VerySmileIcon />
    case 5:
      return <VerySmileIcon />
    default:
      return <VerySmileIcon />
  }
}
