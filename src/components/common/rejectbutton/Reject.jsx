import React from 'react'
import './reject.css'
export default function Reject({setmodal,setknow}) {
  function reject() {
    setknow(false)
    setmodal(true)
  }

  return (
    <>
    <button className='reject' onClick={reject}>
        Reject
    </button>
      
    </>
  )
}
