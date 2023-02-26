import React from 'react'
import './EventCard.css'

const EventCard = () => {
  return (
    <div className='event_card'>
        <div className='event_log'>
            <div className='event_log_header'>
                Disease
            </div>
            <div className='event_log_desc'>
                This is desc This is desc This is desc This is desc This is desc This is desc
            </div>
        </div>
        <div className='event_log_time'>
            12:05 PM
        </div>
    </div>
  )
}

export default EventCard