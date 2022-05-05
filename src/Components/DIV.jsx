import React from 'react'

export default function DIV(props){
  return (
    <div className='Korobka'>
        <h3> {props.text} </h3>
        <img src = {props.box} alt='Phone'/>
    </div>
  )
}

