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
      <ICard Name="Abhishek" rollNo="24" email="abhishek@example.com" />
      <ICard Name="Abhijeet" rollNo="25" email="abhijet@example.com" />
      <ICard Name="Ankit" rollNo="26" email="ankit@example.com" />
    </div>
  )
}

export default ICardgallery