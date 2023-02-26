import React from 'react'
import LeftPane from './LeftPane'
import Main from './Main'
import RightPane from './RightPane'
import './HomePage.css'

const HomePage = () => {
  return (
    <div className='home-page'>
        <LeftPane tankMeasure={"3.7"} humidityMeasure = {"6"}/>
        <Main/>
        <RightPane/>
    </div>
  )
}

export default HomePage