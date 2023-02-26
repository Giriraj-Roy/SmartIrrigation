import React from 'react'
import IconComp from './IconComp'
import './Left.css'

const LeftPane = ({tankMeasure, humidityMeasure}) => {
  return (
    <div className='left_body'>
      <div className='left_tank'>
        <IconComp title={"Tank"}/>
        <div className='left_measure'>
          <span>
            {tankMeasure}
          </span>
          {" "}/ 5 L</div>
      </div>
      <div className='left_humid'>
        <IconComp title={"Humidity"}/>
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