'use client'

import { useState } from 'react'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)

  const handlePlay = () => {
    setIsPlaying(true)
    // Video playback logic will be implemented when actual video is added
  }

  return (
    <section className="bg-[#FBFBF9] py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16">
        <div className="relative w-full aspect-video bg-gray-900 rounded-lg overflow-hidden">
        {!isPlaying ? (
          // Video Placeholder with Play Button
          <div
            className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 cursor-pointer group"
            onClick={handlePlay}
          >
            {/* Placeholder Background */}
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white/40 text-sm md:text-base">Video placeholder</span>
            </div>

            {/* Play Button */}
            <button
              className="relative z-10 w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm transition-all group-hover:scale-110"
              aria-label="Play video"
            >
              <svg
                className="w-10 h-10 md:w-12 md:h-12 text-white ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </button>
          </div>
        ) : (
          // Video Player (to be implemented with actual video)
          <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
            <div className="text-white text-center">
              <p className="mb-4">Video will play here</p>
              <button
                onClick={() => setIsPlaying(false)}
                className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded text-sm"
              >
                Close
              </button>
            </div>
          </div>
        )}
        </div>
      </div>
    </section>
  )
}

