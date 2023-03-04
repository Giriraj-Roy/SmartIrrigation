import React from 'react'
import IconComp from './IconComp'
import './Left.css'
import tankIcon from '../assests/images/homepage/WhatsApp Image 2023-02-27 at 1.45.30 AM.svg'
// import humidityIcon from '../assests/images/homepage/WhatsApp Image 2023-02-27 at 2.39.19 AM.jpeg'
import humidityIcon from '../assests/images/homepage/soilb.png'


const LeftPane = ({tankMeasure, humidityMeasure}) => {
  return (
    <div className='left_body'>
      <div className='left_tank'>
        <IconComp title={"Tank"} icon={tankIcon}/>
        <div className='left_measure'>
          <span>
            {tankMeasure}
          </span>
          {" "}/ 5 L</div>
      </div>
      <div className='left_humid'>
        <IconComp title={"Moisture"} icon={humidityIcon}/>
        <div  className='left_measure'>
          <span>
            {humidityMeasure}
          </span>
          {" "} / 10 </div>
      </div>
    </div>
  )
}

export default LeftPane