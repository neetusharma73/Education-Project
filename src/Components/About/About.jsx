import React from 'react';
import './About.css'
import about_img from '../../assets/md2.webp'
import play_icon from '../../assets/ply.jpg'


const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src={about_img} alt="" className='about-img' />
            <img src={play_icon} alt="" className='play-icon' />


        </div>
        <div className="about-right">
<h3>ABOUT UNIVERSITY</h3>
<h2>Nurturing Tomorrow's Leaders Today</h2>
<p>
Education is the process of acquiring knowledge, skills, values, and understanding through formal, informal, or self-directed learning. It plays a vital role in personal and societal growth, empowering individuals to achieve their potential. Education fosters critical thinking, creativity, and problem-solving skills, preparing people for life's challenges. It promotes equality, bridges gaps, and opens doors to opportunities. Through education, individuals gain the tools to contribute meaningfully to society and improve their quality of life. It is a lifelong journey, encompassing academic, social, and practical learning. Education builds a foundation for innovation, progress, and a better, more informed global community.
</p>
        </div>

    </div>
  );
}

export default About;
