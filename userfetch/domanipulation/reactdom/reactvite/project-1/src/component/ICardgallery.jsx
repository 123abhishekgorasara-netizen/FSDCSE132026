import React from 'react'
import ICard from './ICard'

function ICardgallery() {
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3, minmax(180px, 1fr))',
        gap: '20px',
        width: '100%',
        maxWidth: '1000px'
      }}
    >
      <ICard name="Abhay" rollNo="24" email="abhay@example.com" />
      <ICard name="John" rollNo="25" email="john@example.com" />
      <ICard name="Jane" rollNo="26" email="jane@example.com" />
    </div>
  )
}

export default ICardgallery