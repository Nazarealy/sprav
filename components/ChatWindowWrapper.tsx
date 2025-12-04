'use client'

import { useChatWindow } from '@/contexts/ChatWindowContext'
import ChatWindow from './ChatWindow'

export default function ChatWindowWrapper() {
  const { isOpen, closeChat } = useChatWindow()
  return <ChatWindow isOpen={isOpen} onClose={closeChat} />
}

