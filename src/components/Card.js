import React from 'react'

export default function Card({title,value}) {
  return (
    <div className='card'>
    <h1>{title}</h1>
     <h2> 
{value}
</h2>
    </div>
  )
}

  