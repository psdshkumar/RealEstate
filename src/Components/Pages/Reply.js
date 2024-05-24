import React from 'react'
import '../Style/Reply.css'
import check from '../Asset/Checkmark.gif'
import { useNavigate } from 'react-router-dom'

const Reply = () => {
    const Navigate = useNavigate ()
  return (
    <div className='submit1'>
        <img className='check' src={check} typeof='image'></img>
        <h3>Thank you</h3>
        <h1> Submitted Form is received </h1>

<h3> Our Expert will get back to you. Thank you</h3>

<button className='Home1' onClick={()=>Navigate('/')}>Back to Home </button>

    </div>
  )
}

export default Reply
