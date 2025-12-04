'use client'

import { useContactPopup } from '@/contexts/ContactPopupContext'
import ContactPopup from './ContactPopup'

export default function ContactPopupWrapper() {
  const { isOpen, closePopup } = useContactPopup()
  return <ContactPopup isOpen={isOpen} onClose={closePopup} />
}

