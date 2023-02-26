import React, { useState } from 'react'
import IconComp from './IconComp'
import './Right.css'
import Modal from 'react-modal'
import { eventData } from '../assests/eventData'
import EventCard from './EventCard'
import settingsIcon from '../assests/images/homepage/construction_FILL0_wght400_GRAD0_opsz48.png'
import net from '../assests/images/homepage/wifi_FILL0_wght400_GRAD0_opsz48.png'
import bat from '../assests/images/homepage/battery_horiz_075_FILL0_wght400_GRAD0_opsz48.png'

const RightPane = () => {

  const [settingsModalIsOpen, setSettingsModalIsOpen] = useState(false)
  const [eventModalIsOpen, setEventModalIsOpen] = useState(false)



  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      width: '20vw',
      height: '20vh',
      borderRadius: '1rem',
      background: 'rgb(210, 247, 180)',
      transform: 'translate(-50%, -50%)',
    },
  };
  const customStylesEvents = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      padding: '3vw',
      width: '50vw',
      height: 'auto',
      maxHeight: '80vh',
      borderRadius: '1rem',
      background: 'rgb(225, 247, 200)' ,
      transform: 'translate(-50%, -50%)',
    },
  };


  const Events = 
      eventData.map( (e) =>{
        return(
        <div key={e.id}>
          {e.desc} {" "} {e.id}
        </div>

        )
      } )
    
  

  const settingModal = 
      <Modal
        isOpen={settingsModalIsOpen}
        style={customStyles}
        ariaHideApp={false}
        contentLabel="Example Modal">
          <div 
                onClick={()=>setSettingsModalIsOpen(false)}
          >
            close
          </div>
      </Modal>

  const eventmodal = 
        <Modal
          isOpen={eventModalIsOpen}
          style={customStylesEvents}
          ariaHideApp={false}
          contentLabel="Example Modal">
            <div
                  className='right_event_modal_cross'
                  onClick={()=>setEventModalIsOpen(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="3vw" viewBox="0 96 960 960" width="3vw"><path d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z"/>
              </svg>
            </div>
            <div>
              {/* {Events} */}
              <EventCard/>
              <EventCard/>
              <EventCard/>

            </div>
        </Modal>


  return (
    <div className='right_body'>

      <div className='right_options'>
        <div className='right_options_options'>
          <img src={net} alt=""/>
        </div>
        <div className='right_options_options'>
          <img src={bat} alt=""/>

        </div>
      </div>


      <div className='right_logs'
            onClick={()=>{
              setEventModalIsOpen(true)
            }}
      >
        <div className='right_logs_head'>
          Event Logs
        </div>
        <div className='right_logs_memo'>
            {Events}
        </div>
      </div>
      <div className='right_settings'
            onClick={()=>{
              setSettingsModalIsOpen(true)
            }}
      >
        
        <IconComp title={"Settings"} icon={settingsIcon} />
      </div>
      {settingModal}
      {eventmodal}
      

    </div>
  )
}

export default RightPane