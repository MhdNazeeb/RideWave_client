import React from 'react'
import './ride.css'
import { useNavigate } from 'react-router-dom'
export default function Ride({setStartmodal}) {
  const  navigate = useNavigate()
  function ride() {
    
    
  }

  return (
    <>
    <button className='ride' onClick={ride}>
       start Drive
    </button>
      
    </>
  )
}