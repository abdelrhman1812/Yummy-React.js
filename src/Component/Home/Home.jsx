import React from 'react';
import Header from '../Header/Header';
import Service from '../Service/Service';
import Aboutus from '../About-us/About-us';
import Menu from '../Menu/Menu';
import Contact from '../Contact/Contact';
import Team from '../Team/Team';
import Helmet from 'react-helmet'
import Testimonial from '../Testimonial/Testimonial';
export default function Home() {


    return (
        <>
            <Helmet >
                <title>Home</title>
            </Helmet>
            <Header />
            <Service />
            <Aboutus />
            <Menu num='6' numC='6' />
            <Contact />
            <Team />
            <Testimonial />
        </>
    );
}
