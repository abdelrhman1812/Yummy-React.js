import Aos from 'aos';
import React, { useEffect } from 'react'
export default function Team() {
    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])

    return <>
        <div className='container team'>
            <h5>Team Members</h5>
            <h2>Our Master Chefs</h2>
            <div className="row g-3">
                <div className="col-md-6 col-lg-3">

                    <div className="item" data-aos="fade-right" data-aos-duration="1000">
                        <figure>
                            <img src={require('../../Assets/images/Team/team-1.jpg')} className='w-100' alt="" />
                            <figcaption>
                                <p>Full Name</p>
                                <span>Designation</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-instagram'></i>

                        </div>
                    </div>
                </div>
                <div className="col-md-6 col-lg-3">

                    <div className="item" data-aos="fade-down" data-aos-duration="1000">
                        <figure>
                            <img src={require('../../Assets/images/Team/team-2.jpg')} className='w-100' alt="" />
                            <figcaption>
                                <p>Full Name</p>
                                <span>Designation</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-instagram'></i>

                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-lg-3">

                    <div className="item " data-aos="fade-up" data-aos-duration="1000">
                        <figure>
                            <img src={require('../../Assets/images/Team/team-3.jpg')} className='w-100' alt="" />
                            <figcaption>
                                <p>Full Name</p>
                                <span>Designation</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-instagram'></i>

                        </div>
                    </div>
                </div>


                <div className="col-md-6 col-lg-3">

                    <div className="item " data-aos="fade-left" data-aos-duration="1000">
                        <figure>
                            <img src={require('../../Assets/images/Team/team-4.jpg')} className='w-100' alt="" />
                            <figcaption>
                                <p>Full Name</p>
                                <span>Designation</span>
                            </figcaption>
                        </figure>
                        <div className="social">
                            <i className=' fa-brands fa-facebook'></i>
                            <i className=' fa-brands fa-twitter'></i>
                            <i className=' fa-brands fa-instagram'></i>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
