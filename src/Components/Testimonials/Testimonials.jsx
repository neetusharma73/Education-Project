import React, { useRef } from 'react';
import './Testimonials.css'
// eslint-disable-next-line no-unused-vars
import next_icon from '../../assets/right arrow.png'
import back_icon from '../../assets/left arrow 2.png'
import user_1 from '../../assets/ms3.avif'
import user_2 from '../../assets/studnt.jpg'
import user_3 from '../../assets/studnt2.jpg'
import user_4 from '../../assets/md1.jpg'



const Testimonials = () => {
    const slider = useRef();
    let tx = 0;
    // logic for back and next button
    const slideForward = () => {
        if (tx > -50) {
            tx -= 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }
    const slideBackward = () => {
        if (tx < 0) {
            tx += 25;
        }
        slider.current.style.transform = `translateX(${tx}%)`;

    }







    return (
        <div className='testimonials'>
            <img src={next_icon} alt="" className='next-btn' onClick={slideForward} />
            <img src={back_icon} alt="" className='back-btn' onClick={slideBackward} />
            <div className="slider">
                <ul ref={slider}>
                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_1} alt="" />
                                <div>
                                    <h3>
                                        William Jackson 1
                                    </h3>
                                    <span>
                                        Edusity,USA
                                    </span>
                                </div>
                            </div>
                            <p>
                                Education is the process of acquiring knowledge, skills, values, and understanding through formal, informal, or self-directed learning. It plays a vital role in personal and societal growth, empowering individuals to achieve their potential. Education fosters critical thinking, creativity, and problem-solving skills, preparing people for life's challenges.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_2} alt="" />
                                <div>
                                    <h3>
                                        William Jackson 2
                                    </h3>
                                    <span>
                                        Edusity,USA
                                    </span>
                                </div>
                            </div>
                            <p>
                                Education is the process of acquiring knowledge, skills, values, and understanding through formal, informal, or self-directed learning. It plays a vital role in personal and societal growth, empowering individuals to achieve their potential. Education fosters critical thinking, creativity, and problem-solving skills, preparing people for life's challenges.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_3} alt="" />
                                <div>
                                    <h3>
                                        William Jackson 3
                                    </h3>
                                    <span>
                                        Edusity,USA
                                    </span>
                                </div>
                            </div>
                            <p>
                                Education is the process of acquiring knowledge, skills, values, and understanding through formal, informal, or self-directed learning. It plays a vital role in personal and societal growth, empowering individuals to achieve their potential. Education fosters critical thinking, creativity, and problem-solving skills, preparing people for life's challenges.
                            </p>
                        </div>
                    </li>

                    <li>
                        <div className="slide">
                            <div className="user-info">
                                <img src={user_4} alt="" />
                                <div>
                                    <h3>
                                        William Jackson 4
                                    </h3>
                                    <span>
                                        Edusity,USA
                                    </span>
                                </div>
                            </div>
                            <p>
                                Education is the process of acquiring knowledge, skills, values, and understanding through formal, informal, or self-directed learning. It plays a vital role in personal and societal growth, empowering individuals to achieve their potential. Education fosters critical thinking, creativity, and problem-solving skills, preparing people for life's challenges.
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}

export default Testimonials;
