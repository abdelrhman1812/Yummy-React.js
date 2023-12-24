import React, { useEffect } from 'react'
import MainHeader from '../Main-Header/Main-Header'
import Aos from 'aos';
import { Helmet } from 'react-helmet'
export default function ContactUs() {


    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>

        <Helmet >

            <title>Contact</title>
        </Helmet>
        <section className="contact-us">

            <MainHeader page="Contact Us" />

            <section className='container contact-section'>
                <h5>Contact Us</h5>
                <h2>Contact For Any Query</h2>

                <div className="heading row">
                    <div className="col-md-4">
                        <div className="item" data-aos="flip-up" data-aos-duration="1000">
                            <h6>Booking</h6>

                            <span>
                                <i className="fa-regular fa-envelope"></i>    abdelrhmana@gmail.com</span>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="item" data-aos="flip-up" data-aos-duration="1000">
                            <h6>General</h6>
                            <span>
                                <i className="fa-regular fa-envelope"></i>    abdelrhmana@gmail.com</span>
                        </div>
                    </div>

                    <div className="col-md-4">
                        <div className="item" data-aos="flip-up" data-aos-duration="1000">
                            <h6>Technical</h6>
                            <span>
                                <i className="fa-regular fa-envelope"></i>    abdelrhmana@gmail.com</span>
                        </div>
                    </div>



                </div>

                <div className="row g-3">
                    <div className="col-md-6">
                        <iframe
                            data-aos="zoom-in" data-aos-duration="1000"
                            title="Google Maps"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54695.26706171558!2d31.341639919525356!3d31.041453146577258!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14f79db7a9053547%3A0xf8dab3bbed766c97!2sMansoura%2C%20Mansoura%20Qism%202%2C%20El%20Mansoura%2C%20Dakahlia%20Governorate!5e0!3m2!1sen!2seg!4v1686262002548!5m2!1sen!2seg"
                            height="450"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                    <div className="col-md-6">
                        <form >
                            <div className='d-flex justify-content-between'>
                                <input type="text" className='form-control name' placeholder='Your Name' data-aos="zoom-in" data-aos-duration="1000" />
                                <input type="email" className='form-control email' placeholder='Your Email' data-aos="zoom-in" data-aos-duration="1000" />
                            </div>
                            <input type="text" className='form-control subject' placeholder='Your Email' data-aos="zoom-in" data-aos-duration="1000" />
                            <textarea placeholder='Message' id="" cols="30" rows="10" className='form-control' data-aos="zoom-in" data-aos-duration="1000"></textarea>
                            <button data-aos="zoom-in" data-aos-duration="1000">Send Message</button>
                        </form>
                    </div>
                </div>



            </section>



        </section>
    </>
}
