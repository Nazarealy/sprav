'use client'

import { useVacationOptionsPopup } from '@/contexts/VacationOptionsPopupContext'
import VacationOptionsPopup from './VacationOptionsPopup'

export default function VacationOptionsPopupWrapper() {
  const { isOpen, closePopup } = useVacationOptionsPopup()

  return <VacationOptionsPopup isOpen={isOpen} onClose={closePopup} />
}

