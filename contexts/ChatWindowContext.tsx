'use client'

import { createContext, useContext, useState, ReactNode } from 'react'

interface ChatWindowContextType {
  isOpen: boolean
  openChat: () => void
  closeChat: () => void
}

const ChatWindowContext = createContext<ChatWindowContextType | undefined>(undefined)

export function ChatWindowProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false)

  const openChat = () => setIsOpen(true)
  const closeChat = () => setIsOpen(false)

  return (
    <ChatWindowContext.Provider value={{ isOpen, openChat, closeChat }}>
      {children}
    </ChatWindowContext.Provider>
  )
}

export function useChatWindow() {
  const context = useContext(ChatWindowContext)
  if (context === undefined) {
    throw new Error('useChatWindow must be used within a ChatWindowProvider')
  }
  return context
}

