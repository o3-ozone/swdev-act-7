'use client'

import { useState } from 'react'

export default function InteractiveCard({children}: {children: React.ReactNode}) {
  const [cardStyle, setCardStyle] = useState({
    shadow: 'shadow-lg',
    background: 'bg-white'
  })
  
  const handleMouseOver = () => {
    setCardStyle({
      shadow: 'shadow-2xl',
      background: 'bg-neutral-200'
    })
  }
  
  const handleMouseOut = () => {
    setCardStyle({
      shadow: 'shadow-lg',
      background: 'bg-white'
    })
  }
  
  return (
    <div 
      className={`w-full max-w-sm border border-gray-200 rounded-lg ${cardStyle.shadow} ${cardStyle.background} p-5`}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
    >
      {children}
    </div>
  )
}