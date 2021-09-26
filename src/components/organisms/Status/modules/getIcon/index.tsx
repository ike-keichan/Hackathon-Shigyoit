import React from 'react'

import { NormalIcon } from '@/components/atoms/Icons/Normal'
import { SadIcon } from '@/components/atoms/Icons/Sad'
import { SmileIcon } from '@/components/atoms/Icons/Smile'
import { VerySadIcon } from '@/components/atoms/Icons/VerySad'
import { VerySmileIcon } from '@/components/atoms/Icons/VerySmile'

type GetIcon = (level: number) => any

export const getIcon: GetIcon = (level) => {
  switch (level) {
    case 1:
      return <VerySadIcon />
    case 2:
      return <SadIcon />
    case 3:
      return <NormalIcon />
    case 4:
      return <SmileIcon />
    case 5:
      return <VerySmileIcon />
    default:
      return <VerySmileIcon />
  }
}
