import React from 'react'
import IconComp from './IconComp'
import './Right.css'

const RightPane = () => {
  return (
    <div className='right_body'>

      <div className='right_options'>
        <div className=''>Net</div>
        <div>bat</div>
      </div>


      <div className='right_logs'>
        <div className='right_logs_head'>
          Event Logs
        </div>
        <div className='right_logs_memo'>
            <div>A for apple</div>
            <div>A for apple</div>
            <div>A for apple</div>
            <div>A for apple</div>
        </div>
      </div>
      <div className='right_settings'>
        
        <IconComp title={"Settings"}/>
      </div>

    </div>
  )
}

export default RightPane