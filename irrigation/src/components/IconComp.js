import React from 'react'
import './IconComp.css'

const IconComp = ({icon, title}) => {
  return (
    <div className='icon_body'>
        <div className='icon_image'>
            <img src={icon} alt=""/>
        </div>
        <div className='icon_title'>
            {title}
        </div>
    </div>
  )
}

export default IconComp