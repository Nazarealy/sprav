'use client'

import Image from 'next/image'
import { useChatWindow } from '@/contexts/ChatWindowContext'

export default function ChatButton() {
  const { openChat } = useChatWindow()

  return (
    <button
      onClick={openChat}
      className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 z-50 flex items-center justify-center group"
      aria-label="Support chat"
    >
      <Image
        src="/images/Chat.svg"
        alt="Chat"
        width={36}
        height={36}
        className="object-contain w-10 h-10 sm:w-9 sm:h-9 group-hover:scale-110 group-hover:brightness-110 transition-all"
      />
    </button>
  )
}

