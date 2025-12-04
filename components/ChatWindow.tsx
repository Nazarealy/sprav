'use client'

import { useState } from 'react'

interface ChatWindowProps {
  isOpen: boolean
  onClose: () => void
}

export default function ChatWindow({ isOpen, onClose }: ChatWindowProps) {
  const [message, setMessage] = useState('')

  if (!isOpen) return null

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle message submission here
    console.log('Message sent:', message)
    setMessage('')
  }

  return (
    <div className="fixed bottom-20 sm:bottom-24 right-4 sm:right-6 z-[100] w-[calc(100vw-2rem)] sm:w-[380px] max-w-[380px] bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 w-6 h-6 flex items-center justify-center text-gray-500 hover:text-gray-700 transition-colors z-10"
        aria-label="Close"
      >
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      {/* Content */}
      <div className="p-6 pt-8">
        {/* Speech Bubble */}
        <div className="bg-gray-100 rounded-2xl p-4 mb-4 relative">
          <div className="flex items-start gap-3">
            {/* Waving Hand Icon */}
            <div className="flex-shrink-0 w-7 h-7 flex items-center justify-center text-[#28694D] text-2xl">
              👋
            </div>
            {/* Text Content */}
            <div className="flex-1">
              <p className="text-[#404040] font-bold text-base mb-1">
                Привіт!
              </p>
              <p className="text-[#404040] text-sm leading-relaxed">
                Що тебе цікавить? Ми скоренько відповімо!
              </p>
            </div>
          </div>
        </div>

        {/* Input Form */}
        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Message Input */}
          <div>
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Введіть своє повідомлення"
              className="w-full px-4 py-3 bg-white border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#28694D] focus:border-transparent text-[#404040] placeholder:text-gray-400"
            />
          </div>

          {/* Send Button */}
          <button
            type="submit"
            className="w-full bg-[#28694D] text-white rounded-xl py-3 px-6 font-bold text-base hover:bg-[#1f5239] transition-colors"
          >
            Надіслати
          </button>
        </form>
      </div>
    </div>
  )
}

