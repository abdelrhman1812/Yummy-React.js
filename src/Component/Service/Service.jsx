import React, { useEffect } from 'react'

import Aos from 'aos'
export default function Service() {

    useEffect(() => {

        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>

        <div className='container service'>
            <div className="row gy-3">

                <div className="col-12 col-md-6 col-lg-3" >
                    <div className="item  " data-aos="fade-right" data-aos-duration="1000" >
                        <i className="fa-solid fa-user-tie"></i>
                        <h5>Master Chefs</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>

                <div className="col-12 col-md-6 col-lg-3 ">
                    <div className="item" data-aos="fade-down" data-aos-duration="1000">
                        <i className="fa-solid fa-utensils"></i>
                        <h5>Quality Food</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>


                <div className="col-12 col-md-6 col-lg-3">
                    <div className="item" data-aos="fade-up" data-aos-duration="1000">
                        <i className="fa-solid fa-cart-arrow-down"></i>
                        <h5>Online Order</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>


                <div className="col-12 col-md-6 col-lg-3">
                    <div className="item" data-aos="fade-left" data-aos-duration="1000">
                        <i className="fa-solid fa-headphones-simple"></i>
                        <h5>24/7 Service</h5>
                        <p>Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam</p>
                    </div>
                </div>
            </div>
        </div>


    </>
}
