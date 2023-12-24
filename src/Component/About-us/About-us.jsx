import React, { useEffect } from 'react'
import Aos from 'aos'

export default function AboutUs() {

    useEffect(() => {

        Aos.init({
            offset: 200,
            // duration: 1000,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>

        <div className="container about-us px-5">
            <div className="row g-3 d-flex align-items-center">
                {/* Image */}
                <div className='col-lg-6'>
                    <div className="row " >
                        <div className="col-6 about-img">
                            <figure>
                                <img src={require('../../Assets/images/About-us/1.jpg')} className='one o' alt="meal" data-aos="flip-left" data-aos-duration="1000" />
                            </figure>

                        </div>
                        <div className="col-6 d-flex justify-content-end align-items-end">
                            <figure>
                                <img src={require('../../Assets/images/About-us/2.jpg')} className='two t' alt="meal" data-aos="flip-up" data-aos-duration="1000" />
                            </figure>

                        </div>

                        <div className="col-6 text-end align-self-start">
                            <figure>
                                <img src={require('../../Assets/images/About-us/3.jpg')} className='two th' alt="meal" data-aos="flip-right" data-aos-duration="1000" />
                            </figure>

                        </div>


                        <div className="col-6">
                            <figure>
                                <img src={require('../../Assets/images/About-us/4.jpg')} className='one fo' alt="meal" data-aos="flip-down" data-aos-duration="1000" />
                            </figure>

                        </div>
                    </div>
                </div>
                {/* Data */}
                <div className='col-lg-6'>
                    <div className="about-data" data-aos="zoom-out-left" data-aos-duration="1000" >
                        <h5 >Aboutus</h5>
                        <h2>Welcome to <i className="fa-solid fa-burger"></i> Yummy</h2>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.</p>
                        <div className="about-details">
                            <div className="item">
                                <div className="num">
                                    <span>15</span>
                                </div>
                                <div className="text">
                                    <span>Years Of</span>
                                    <p>EXPERIENCE</p>
                                </div>
                            </div>
                            <div className="item">
                                <div className="num">
                                    <span>50</span>
                                </div>
                                <div className="text">
                                    <span>Popular</span>
                                    <p>MASTER CHEFS</p>
                                </div>
                            </div>

                        </div>
                        <div className='my-3'>
                            <button>Read More</button>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
}
