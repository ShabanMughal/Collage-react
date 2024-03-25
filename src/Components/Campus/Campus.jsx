import React from 'react'
import './Campus.css'
import Gallery1 from '../../assets/gallery-1.png'
import Gallery2 from '../../assets/gallery-2.png'
import Gallery3 from '../../assets/gallery-3.png'
import Gallery4 from '../../assets/gallery-4.png'
import White_arrow from '../../assets/white-arrow.png'




const Campus = () => {
  return (
    <div className='campus'>
        <div className="gallery">
            <img src={Gallery1} />
            <img src={Gallery2} />
            <img src={Gallery3} />
            <img src={Gallery4} />
        </div>
        <button className='btn dark-btn'>See more here <img src={White_arrow} /></button>

    </div>
  )
}

export default Campus