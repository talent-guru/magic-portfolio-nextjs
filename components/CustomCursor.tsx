'use client'

import { useEffect, useState, useRef } from 'react'

const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isHovering, setIsHovering] = useState(false)
  const [isClicking, setIsClicking] = useState(false)
  const [trails, setTrails] = useState<Array<{ id: number; x: number; y: number; timestamp: number }>>([])
  const trailIdCounter = useRef(0)
  
  // Refs for direct DOM manipulation
  const outlineRef = useRef<HTMLDivElement>(null)
  const outlinePosition = useRef({ x: 0, y: 0 })
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      
      // Add trail effect with unique ID
      const newTrail = {
        id: trailIdCounter.current++,
        x: e.clientX,
        y: e.clientY,
        timestamp: Date.now()
      }
      
      setTrails(prev => [...prev, newTrail])
      
      // Remove old trails after 800ms
      setTimeout(() => {
        setTrails(prev => prev.filter(trail => trail.id !== newTrail.id))
      }, 800)

      // Smooth outline movement using requestAnimationFrame
      if (outlineRef.current) {
        // Cancel previous animation frame
        if (animationFrameId.current) {
          cancelAnimationFrame(animationFrameId.current)
        }

        // Smooth interpolation for outline
        const targetX = e.clientX - 20
        const targetY = e.clientY - 20
        
        const animateOutline = () => {
          const currentX = outlinePosition.current.x
          const currentY = outlinePosition.current.y
          
          // Smooth following with easing
          const newX = currentX + (targetX - currentX) * 0.15
          const newY = currentY + (targetY - currentY) * 0.15
          
          outlinePosition.current = { x: newX, y: newY }
          
          if (outlineRef.current) {
            outlineRef.current.style.transform = `translate(${newX}px, ${newY}px)`
          }
          
          // Continue animation if not close enough to target
          if (Math.abs(newX - targetX) > 0.5 || Math.abs(newY - targetY) > 0.5) {
            animationFrameId.current = requestAnimationFrame(animateOutline)
          }
        }
        
        animationFrameId.current = requestAnimationFrame(animateOutline)
      }
    }

    const handleMouseDown = () => setIsClicking(true)
    const handleMouseUp = () => setIsClicking(false)

    // Add hover detection for interactive elements
    const handleMouseEnter = () => setIsHovering(true)
    const handleMouseLeave = () => setIsHovering(false)

    // Add event listeners
    document.addEventListener('mousemove', updateMousePosition)
    document.addEventListener('mousedown', handleMouseDown)
    document.addEventListener('mouseup', handleMouseUp)

    // Add hover detection for all interactive elements
    const interactiveElements = document.querySelectorAll('button, a, input, textarea, .card-hover, .glow-on-hover')
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter)
      el.addEventListener('mouseleave', handleMouseLeave)
    })

    return () => {
      document.removeEventListener('mousemove', updateMousePosition)
      document.removeEventListener('mousedown', handleMouseDown)
      document.removeEventListener('mouseup', handleMouseUp)
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter)
        el.removeEventListener('mouseleave', handleMouseLeave)
      })

      // Clean up animation frame
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [])

  return (
    <>
      {/* Main cursor dot */}
      <div
        className={`cursor-dot ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          left: mousePosition.x - 4,
          top: mousePosition.y - 4,
        }}
      />
      
      {/* Cursor outline - using ref for smooth DOM manipulation */}
      <div
        ref={outlineRef}
        className={`cursor-dot-outline ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}
        style={{
          position: 'fixed',
          pointerEvents: 'none',
          zIndex: 9998,
          width: '40px',
          height: '40px',
          border: '2px solid rgba(14, 165, 233, 0.3)',
          borderRadius: '50%',
          background: 'rgba(14, 165, 233, 0.1)',
          transform: 'translate(0px, 0px)', // Initial position
        }}
      />
      
      {/* Mouse trail effect */}
      {trails.map((trail) => (
        <div
          key={trail.id}
          className="mouse-trail"
          style={{
            left: trail.x - 3,
            top: trail.y - 3,
          }}
        />
      ))}
    </>
  )
}

export default CustomCursor
