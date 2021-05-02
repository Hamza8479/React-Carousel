import React, {useState} from 'react'
import {Data} from './SliderData'
import {FaArrowAltCircleRight, FaArrowAltCircleLeft} from 'react-icons/fa'


function ImageSlider({slides}) {
    const [current, setCurrent] = useState(0)
     const length = slides.length
    return (
        <div className='imgSlider'>
        
            <FaArrowAltCircleLeft className='left-arrow' />
            <FaArrowAltCircleRight className='right-arrow' />
        {Data.map((slider, index) =>{
            return <img src={slider.image} className='image'/>;
        })}
        
        </div>
    )
}

export default ImageSlider
