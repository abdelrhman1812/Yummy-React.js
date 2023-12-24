import React from 'react'
export default function Contact() {
    return <>

        <div className='container contact'>
            <div className="row g-0">
                <div className="col-md-6 image">

                    {/* <img src={require('../../Assets/images/Contact/1.jpg')} className='w-100 img-fluid d-block d-md-none ' alt="contact" /> */}

                </div>

                <div className="col-md-6 form-col">
                    <form >
                        <h5>Yummy</h5>
                        <h2>Book A Table Online</h2>
                        <div className="row g-3">
                            <div className="col-md-6">
                                <input type="text" className='form-control' placeholder='Name' />
                            </div>
                            <div className="col-md-6">
                                <input type="email" className='form-control' placeholder='Email' />
                            </div>
                            <div className="col-md-6">
                                <input type="date" className='form-control' placeholder='Date' />
                            </div>
                            <div className="col-md-6">
                                <input type="tel" className='form-control' placeholder='Phone' />
                            </div>
                            <div className="col-12">
                                <textarea className='form-control' placeholder='Spacial Request' cols="30" rows="5"></textarea>                            </div>
                        </div>
                        <div className="col-12 text-center">
                            <button>Book Now</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
}
