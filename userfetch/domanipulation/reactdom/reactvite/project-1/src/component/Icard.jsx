import React from 'react'

function ICard(props) {
  return (
   <div
          style={{
            border: '3px solid red',
            width: '100%',
            minWidth: 0,
            padding: '20px',
            textAlign: "center",
            backgroundColor: "white",
            fontWeight: 900,
            fontSize: "20px",
            color: "green",
            boxSizing: 'border-box',
            overflowWrap: 'anywhere'
          }}
        >
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSt7YW7ReSPYUPWaGoJDtALJS-CGthC2_jUycmgfPUuQ&s=10"
            alt="Abesec"
            style={{
              width: '100%',
              height: '140px',
              objectFit: 'cover',
              display: 'block'
            }}
          />
          <h2 style={{ margin: '8px 0', fontWeight: 900, fontSize: '24px', color: '#111111' }}>name:{props.name}</h2>
          <h2 style={{ margin: '8px 0', fontWeight: 900, fontSize: '24px', color: '#111111' }}>roll no:{props.rollNo}</h2>
          <h2 style={{ margin: '8px 0', fontWeight: 900, fontSize: '24px', color: '#111111', overflowWrap: 'anywhere' }}>email:{props.email}</h2>
        </div>
  )
}

export default ICard