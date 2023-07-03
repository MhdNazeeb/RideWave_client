import React from 'react'
import  './Button.css'

export default function Button({setmodal,setknow}) {

  function confirm() {
    setmodal(true)
    setknow(true)
   
  }
  return (
    <>
  <button className='confirm' onClick={confirm}>
   Confirm
  </button>
    </>
  )
}
