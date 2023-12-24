import React from 'react'
export default function Footer() {
    return <>

        <div className=' footer'>

            <div className='container'>

                <div className='row gy-5'>

                    <div className='col-md-6 col-lg-3'>
                        <div className="comapany">
                            <h5>Comapany</h5>
                            <ul>
                                <li>About Us</li>
                                <li>Contact Us</li>
                                <li>Privacy Poicy </li>
                                <li>Terms & Condition</li>
                            </ul>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-3'>
                        <div className="contact-footer">
                            <h5>Contact</h5>
                            <div className="item">
                                <i className='fa fa-location-pin'></i>
                                <span>10 A , Mansoura</span>
                            </div>
                            <div className="item">
                                <i className='fa fa-phone'></i>
                                <span>01008034761</span>
                            </div>
                            <div className="item">
                                <i className="fa-regular fa-envelope"></i>
                                <span>abdelrhmnaali1812@gmail.com</span>
                            </div>
                            <div className="item-social">
                                <i className=' fa-brands fa-facebook'></i>
                                <i className=' fa-brands fa-twitter'></i>
                                <i className=' fa-brands fa-instagram'></i>
                                <i className=' fa-brands fa-google'></i>
                            </div>
                        </div>
                    </div>

                    <div className='col-md-6 col-lg-3'>
                        <div className="opening">
                            <h5>Opening</h5>
                            <p>Monday - Saturday</p>
                            <span className='mb-3'>09AM - 09PM</span>
                            <p>Sunday</p>
                            <span>10AM - 08PM</span>
                        </div>
                    </div>

                    <div className="col-md-6 col-lg-3">
                        <div className="newsletter">
                            <h5>Newsletter</h5>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className='position-relative'>

                                <input type="text" placeholder='Your Email' className='form-control' />
                                <button>Sent</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>
    </>
}
