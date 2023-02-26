import React, { useRef } from 'react'
import Webcam from 'react-webcam'
import IconComp from './IconComp'
import './Main.css'
import downArrow from '../assests/images/homepage/arrow-down-3101.png'
import upArrow from '../assests/images/homepage/arro-up-3100.png'
import voiceIcon from '../assests/images/homepage/campaign_FILL0_wght400_GRAD0_opsz48.png'
import langIcon from '../assests/images/homepage/language_FILL0_wght400_GRAD0_opsz48.png'
import sprinklerIcon from '../assests/images/homepage/sprinkler_FILL0_wght400_GRAD0_opsz48.png'
import moistureIcon from '../assests/images/homepage/soil-moisture-monitoring-black-linear-icon-vector-removebg-preview.png'

const Main = () => {

  // const camRef = useRef(null);

  return (
    <div className='main_body'>
      <div className='main_video'>
        <Webcam
              width={"100%"}
              height={"100%"}
              mirrored={true}
              audio={false}
        />
      </div>
      <div className='main_options'>
        <div className='main_options_left'>
          <IconComp title={"voice"} icon={voiceIcon}/>
          <IconComp title={"lang"} icon={langIcon} />
        </div>

          <div className='main_controls'>
            <div className='main_controls_btn'>
            <svg xmlns="http://www.w3.org/2000/svg" height="3vw" viewBox="0 96 960 960" width="3vw"><path d="M400 976 0 576l400-400 56 57-343 343 343 343-56 57Z"/></svg>
            </div>
            <div className='main_controls_vertical'>

              <div className='main_controls_btn'>
                <img style={{width: '3vw'}} src={upArrow} alt=""/>

              </div>
              <div className='main_controls_btn'>
                  <img style={{width: '3vw'}} src={downArrow} alt=""/>
              </div>
              
            </div>
            <div className='main_controls_btn'>
              <svg xmlns="http://www.w3.org/2000/svg" height="3vw" viewBox="0 96 960 960" width="3vw"><path d="m304 974-56-57 343-343-343-343 56-57 400 400-400 400Z"/></svg>
            </div>
          </div>
          <div style={{width: "30vw"}}></div>

        <div className='main_options_right'>
          <IconComp title={"Water"} icon={sprinklerIcon}/>
          <IconComp title={"Moisture"} icon={moistureIcon}/>
        </div>

      </div>
    </div>
  )
}

export default Main