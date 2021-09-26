import { useState } from 'react'

import { EmptyFunction } from '@/shared/types'

type UseChangePanelReturns = {
  isSelectedRight: boolean
  handleSelectLeft: EmptyFunction
  handleSelectRight: EmptyFunction
}

type UseChangePanel = () => UseChangePanelReturns

export const useChangePanel: UseChangePanel = () => {
  const [isSelectedRight, setIsSelectedRight] = useState<boolean>(false)

  const handleSelectLeft: EmptyFunction = () => setIsSelectedRight(false)

  const handleSelectRight: EmptyFunction = () => setIsSelectedRight(true)

  return {
    isSelectedRight,
    handleSelectLeft,
    handleSelectRight,
  }
}
