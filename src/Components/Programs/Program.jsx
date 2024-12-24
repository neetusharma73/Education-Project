import React from 'react'
import './Program.css'
import program_1 from '../../assets/ms1.jpg';
import program_2 from '../../assets/ms2.jpg';
import program_3 from '../../assets/ms3.avif';
import program_icon1 from '../../assets/icon1.png'
import program_icon2 from '../../assets/icon2.png'
import program_icon3 from '../../assets/icon3.jpg'



const Program = () => {
  return (
    <div className='programs' >
      <div className="program">
        <img src={program_1} alt="program1" />
        <div className="caption">
          <img src={program_icon1} alt="icon1" />
          <p>Graduation Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_2} alt="program2" />
        <div className="caption">
          <img src={program_icon2} alt="icon2" />
          <p>Master Degree</p>
        </div>
      </div>
      <div className="program">
        <img src={program_3} alt="program3" />
        <div className="caption">
          <img src={program_icon3} alt="icon3" />
          <p>Post Degree</p>
        </div>

      </div>

    </div>
  )
}

export default Program
