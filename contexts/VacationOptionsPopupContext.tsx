'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface VacationOptionsPopupContextType {
  isOpen: boolean
  openPopup: () => void
  closePopup: () => void
}

const VacationOptionsPopupContext = createContext<VacationOptionsPopupContextType | undefined>(undefined)

export function VacationOptionsPopupProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openPopup = () => setIsOpen(true)
  const closePopup = () => setIsOpen(false)

  return (
    <VacationOptionsPopupContext.Provider value={{ isOpen, openPopup, closePopup }}>
      {children}
    </VacationOptionsPopupContext.Provider>
  )
}

export function useVacationOptionsPopup() {
  const context = useContext(VacationOptionsPopupContext)
  if (context === undefined) {
    throw new Error('useVacationOptionsPopup must be used within a VacationOptionsPopupProvider')
  }
  return context
}



