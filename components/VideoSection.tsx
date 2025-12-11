'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function VideoSection() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isCenterHovered, setIsCenterHovered] = useState(false)
  const [volume, setVolume] = useState(1)
  const [showVolumeControl, setShowVolumeControl] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (videoRef.current.paused) {
        videoRef.current.play().catch(() => {
          // Handle play error if needed
        })
      } else {
        videoRef.current.pause()
      }
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newVolume = parseFloat(e.target.value)
    setVolume(newVolume)
    if (videoRef.current) {
      videoRef.current.volume = newVolume
    }
  }

  const toggleMute = () => {
    if (videoRef.current) {
      if (volume > 0) {
        setVolume(0)
        videoRef.current.volume = 0
      } else {
        setVolume(1)
        videoRef.current.volume = 1
      }
    }
  }

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      video.volume = volume
    }
  }, [volume])

  useEffect(() => {
    const video = videoRef.current
    if (video) {
      const handlePlay = () => setIsPlaying(true)
      const handlePause = () => setIsPlaying(false)
      // Set initial state
      setIsPlaying(!video.paused)
      
      video.addEventListener('play', handlePlay)
      video.addEventListener('pause', handlePause)
      return () => {
        video.removeEventListener('play', handlePlay)
        video.removeEventListener('pause', handlePause)
      }
    }
  }, [])

  return (
    <section className="bg-[#FBFBF9] py-16 md:py-20 lg:py-24">
      <div className="w-full">
        <div 
          className="relative w-full aspect-video bg-gray-900 overflow-hidden"
        >
          {/* Video Element */}
          <video
            ref={videoRef}
            src="/images/videoone.mp4"
            className="w-full h-full object-cover"
            loop
            playsInline
          />

          {/* Center Hover Area */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-10 pointer-events-auto"
            onMouseEnter={() => setIsCenterHovered(true)}
            onMouseLeave={() => setIsCenterHovered(false)}
          />

          {/* Play/Pause Button - Center (appears on hover over center) */}
          {isCenterHovered && (
            <button
              onClick={togglePlayPause}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-20 h-20 flex items-center justify-center transition-all pointer-events-auto"
              onMouseEnter={() => setIsCenterHovered(true)}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              <Image
                src={isPlaying ? '/images/pause.svg' : '/images/play.svg'}
                alt={isPlaying ? 'Pause' : 'Play'}
                width={56}
                height={56}
                className="object-contain"
              />
            </button>
          )}

          {/* Volume Control - Bottom Right */}
          <div 
            className="absolute bottom-4 right-4 z-20 flex items-center gap-2"
            onMouseEnter={() => setShowVolumeControl(true)}
            onMouseLeave={() => setShowVolumeControl(false)}
          >
            {/* Volume Slider */}
            {showVolumeControl && (
              <div className="flex items-center gap-2 bg-black/50 backdrop-blur-sm rounded-full px-3 py-2">
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.01"
                  value={volume}
                  onChange={handleVolumeChange}
                  className="w-20 md:w-24 h-1 bg-white/30 rounded-lg appearance-none cursor-pointer accent-white"
                  style={{
                    background: `linear-gradient(to right, white 0%, white ${volume * 100}%, rgba(255,255,255,0.3) ${volume * 100}%, rgba(255,255,255,0.3) 100%)`
                  }}
                />
                <span className="text-white text-xs md:text-sm min-w-[2rem] text-center">
                  {Math.round(volume * 100)}%
                </span>
              </div>
            )}
            
            {/* Volume Icon Button - Always visible */}
            <button
              onClick={toggleMute}
              className="w-16 h-16 flex items-center justify-center transition-all"
              aria-label={volume > 0 ? 'Mute' : 'Unmute'}
            >
              {volume > 0 ? (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                </svg>
              ) : (
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15zM17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
