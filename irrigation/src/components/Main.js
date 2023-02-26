import React, { useRef } from 'react'
import Webcam from 'react-webcam'
import IconComp from './IconComp'
import './Main.css'

const Main = () => {

  // const camRef = useRef(null);

  return (
    <div className='main_body'>
      <div className='main_video'>
        {/* <Webcam
              width={"100%"}
              height={"100%"}
              mirrored={false}
              audio={true}
        /> */}
      </div>
      <div className='main_options'>
        <div className='main_options_left'>
          <IconComp title={"voice"}/>
          <IconComp title={"lang"}/>
        </div>

          <div className='main_controls'>
            <div className='main_controls_btn'>left</div>
            <div className='main_controls_vertical'>

              <div className='main_controls_btn'>Top</div>
              <div className='main_controls_btn'>Down</div>
              
            </div>
            <div className='main_controls_btn'>
              Right
            </div>
          </div>
          <div style={{width: "30vw"}}></div>

        <div className='main_options_right'>
          <IconComp title={"Water"}/>
          <IconComp title={"Moisture"}/>
        </div>

      </div>
    </div>
  )
}

export default Main