import React from 'react'
import './Programs.css'
import Program1 from '../../assets/program-1.png'
import Program2 from '../../assets/program-2.png'
import Program3 from '../../assets/program-3.png'
import Program_icon1 from '../../assets/program-icon-1.png'
import Program_icon2 from '../../assets/program-icon-2.png'
import Program_icon3 from '../../assets/program-icon-3.png'

const Programs = () => {
  return (
    <div className='programs '>
        <div className="program">
            <img src={Program1}  />
            <div className="caption">
                <img src={Program_icon1} />
                <p>Graduate degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program2}  />
            <div className="caption">
                <img src={Program_icon2} />
                <p>Master degree</p>
            </div>
        </div>
        <div className="program">
            <img src={Program3}  />
            <div className="caption">
                <img src={Program_icon3} />
                <p>Post degree</p>
            </div>
        </div>

    </div>
  )
}

export default Programs