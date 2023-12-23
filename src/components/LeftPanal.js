import React from 'react'
import Button from './Button'
export default function LeftPanal() {
    let leftMenuItems = [
        {
            className:"primary button",
            name:"Parts"
        },
        {
            className:"secondry button",
            name:"About"
        },
        {
            className:"danger button",
            name:"Help"
        },
        {
            className:"secondry button",
            name:"company info"
        }
    ]
   

    const buttons = leftMenuItems.map(e=><Button name={e.name} className={e.className}/>)
  return (
    <div className='leftPanal'><div className='leftPanalButtons'>{buttons}</div></div>
  )
}
