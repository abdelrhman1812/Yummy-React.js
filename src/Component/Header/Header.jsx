import Aos from 'aos';
import React, { useEffect } from 'react'
export default function Header() {

    useEffect(() => {
        Aos.init({
            offset: 100,
            easing: 'ease-in-sine',
            delay: 0,
        });
    }, [])
    return <>

        <div className=' header'>
            <div className='container'>
                <div className='row gy-5' >

                    <div className='col-lg-6'>
                        <div className="data shadow" data-aos="fade-right" >
                            <h1> Enjoy Our Delicious Meal </h1>
                            <p>Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                            <button>Book A Table</button>
                        </div>
                    </div>

                    <div className="col-lg-6">
                        <figure data-aos="fade-left">
                            <img src={require('../../Assets/images/header/header.png')} className='img-fluid' alt="meal" />
                        </figure>
                    </div>

                </div>

            </div>
        </div>

    </>
}